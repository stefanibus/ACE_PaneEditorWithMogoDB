import React, { useState, useEffect } from "react";
import { useRouter }     from "next/router";
import SplitPane         from "react-split-pane";
import styles            from "./index.module.css";
import FingerprintJS     from "@fingerprintjs/fingerprintjs";
import sliderSplitPane   from "../utils/splitpane"; //Stefano still needed here?
import surflyProxy       from "../utils/surflyLibary";
import db_communication  from "../utils/mongo_communication";
import ManageProject     from '../components/ManageProject'
import ManageUser        from '../components/ManageUser'
import manageProjects    from "../utils/manageProjects";
import ShowProjName      from "../components/ShowProjName";
import { CssEditor, JavascriptEditor } from "../components/Editors";

const Index = () => {

  const router = useRouter();
  const { projectQuery, userQuery } = router.query;


  const [askLongURL, setAskLongURL] = useState(false);
  const [longurlValueTempoary, setLongurlValueTempoary] = useState("");
  const [saving, setSaving] = useState(false);
  const [userData, setUserData] = useState([]);
  const [projectId, setprojectId] = useState("");

  const [editorHeightValue, setEditorHeightValue] = useState("350px");
  const [verticalPaneSize, setverticalPaneSize] = useState(40);
  const [horizontalSize, setHorizontalSize] = useState(50);
  const [jsValue, setJsValue] = useState("");
  const [cssValue, setCssValue] = useState("");
  const [longurlValue, setLongurlValue] = useState("");
  const [shorturlValue, setLShorturlValue] = useState("");
  const [paneValues, setpaneValues] = useState("startpage.html");
  const [loading, setLoading] = useState(true);
  const [provideProjName, setProvideProjName] = useState(false);
  const [projectName, setProjectName] = useState("")
  const [currentlyDragged, setCurrentlyDragged]  = useState(false);
  const [userID_from_Fingerprint, setUserID_from_Fingerprint] = useState("");
  const [visitorId, setvisitorId] = useState();


//ENV Vars in DEV and Production
  const serverURL = process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_DEVURL : process.env.PRODURL;
  const data4project  = `${serverURL}/api/projectData/${projectQuery}` ;

// load Surfly.com API Proxy
  useEffect( () => {
    surflyProxy.embedLibary()
  }, []);

// fetchData from MongoDB
  useEffect(() => {
     if(router.isReady) {
         setvisitorId(router.query.userQuery);// store visitorId from router.query-Parameter
        // console.log('ProjectData is now certainly available: because router.isReady:' , router.isReady )
        if(typeof projectQuery !== "undefined")  {
           const fetchProjectData = async () => {
                const response = await fetch(data4project);
                const { data } = await response.json();
                      if (response.status !== 200) {
                        alert("This Project might either be deleted, or you might be offline? No ProjectData is available anymore, or we cannot deliver this project currently. We will forward you to the startpage instead. We hope you are fine with that. Feel free to start a new Project by entering any URL you would like to manipulate. ");
                        manageProjects.newProject_Show(sliderSplitPane, setverticalPaneSize, setAskLongURL, setLongurlValueTempoary, longurlValue, setLongurlValue)
                        router.push("/");
                      } else {
                    setProjectName(data.projectName)
                    setLongurlValue(data.longurl)
                    setCssValue(data.css);
                    setJsValue(data.js);
                    setprojectId(projectQuery);
                    db_communication.getProjectListForUser(FingerprintJS, setUserID_from_Fingerprint, setUserData, serverURL)
                }
            }
          fetchProjectData();
          setLoading(false);
        }
        else {
          // console.log('ProjectData is not available: ', projectQuery)
          setLoading(false);
          db_communication.getProjectListForUser(FingerprintJS, setUserID_from_Fingerprint, setUserData, serverURL)
          }
     }
  }, [projectQuery]);


  // waiting for initial Response from MongoDB
  if (loading) { return <div className={styles.loading}>Loading...</div>; }


  // display page after initial Response from MongoDB
  return (
    <div className={`toggleView
                ${askLongURL && ' isVisible_TheCreateNewProjectField ' } `+`
                ${!longurlValue &&  ' isVisible_NoActiveProject ' } `} >

      <div className={styles.header}>

         <ManageProject
             setLongurlValue={setLongurlValue}
             provideProjName={provideProjName}
             setProvideProjName={setProvideProjName}
             setpaneValues={setpaneValues}
             longurlValue={longurlValue}
             projectId={projectId}
             saving={saving}
             setSaving={setSaving}
             setverticalPaneSize={setverticalPaneSize}
             setAskLongURL={setAskLongURL}
             longurlValueTempoary={longurlValueTempoary}
             setLongurlValueTempoary={setLongurlValueTempoary}
             projectQuery={projectQuery}
             userID_from_Fingerprint={userID_from_Fingerprint}
             setUserID_from_Fingerprint={setUserID_from_Fingerprint}
             visitorId={visitorId}
             jsValue={jsValue}
             cssValue={cssValue}
             projectName={projectName}
           />


            {/*display the ProjectName and the LongURL */}
              {(provideProjName)  ?
                  ''
                :
                  <ShowProjName
                     longurlValue={longurlValue}
                     projectName={projectName}
                   />
              }


            {/* Let the User view all Projects and manage them: view User-Projects, Delete, Save new Name. */}
             <ManageUser
                provideProjName={provideProjName}
                projectName={projectName}
                setProjectName={setProjectName}
                setProvideProjName={setProvideProjName}
                userData={userData}
                setUserData={setUserData}
                projectId={projectId}
                setprojectId={setprojectId}
                setLongurlValue={setLongurlValue}
                setCssValue={setCssValue}
                setJsValue={setJsValue}
                projectQuery={projectQuery}
                userID_from_Fingerprint={userID_from_Fingerprint}
                setUserID_from_Fingerprint={setUserID_from_Fingerprint}
                setSaving={setSaving}
                visitorId={visitorId}
                jsValue={jsValue}
                cssValue={cssValue}
                longurlValue={longurlValue}
                FingerprintJS={FingerprintJS}
             />
      </div>
      <SplitPane
        style={{ marginTop: "60px" }}
        split="horizontal"
        size={`${verticalPaneSize}%`}
        minSize={"50%"}
        onDragStarted={() => { setCurrentlyDragged(true) } }
        onDragFinished={(heightFromDragEvent) => {
          setCurrentlyDragged(false)
          setEditorHeightValue(`${heightFromDragEvent - 40}px`);
          setverticalPaneSize(`${heightFromDragEvent - 40}px`) } }
      >
          <SplitPane
              split="vertical"
              minSize="50%"
              size={`${horizontalSize}%`}
              onDragFinished={(size) => { setHorizontalSize(sliderSplitPane.CalcWidthPosition(size)) }}
          >
            <CssEditor
              setEditorHeightValue={setEditorHeightValue}
              editorHeightValue={editorHeightValue}
              onChange={setCssValue}
              value={cssValue}
              setHorizontalSize={setHorizontalSize}
              horizontalSize={horizontalSize}
              setverticalPaneSize={setverticalPaneSize}
              verticalPaneSize= {verticalPaneSize}
            />
            <JavascriptEditor
              setEditorHeightValue={setEditorHeightValue}
              editorHeightValue={editorHeightValue}
              onChange={setJsValue}
              value={jsValue}
              setHorizontalSize={setHorizontalSize}
              horizontalSize={horizontalSize}
              setverticalPaneSize={setverticalPaneSize}
              verticalPaneSize= {verticalPaneSize}
            />
          </SplitPane>
          <iframe
              key={paneValues}
              src={paneValues}
              id="resultFrame"
              name="resultFrame"
              className={styles.previewIframe + ` resultFrame ${currentlyDragged && styles.isInteractive }`}
               >
         </iframe>
      </SplitPane>
    </div>
  );
};

export default Index;