import React, { useState, useEffect } from "react";
import { useRouter }     from "next/router";
import SplitPane         from "react-split-pane";
import styles            from "./index.module.css";
import {BsX}             from "react-icons/bs";
import FingerprintJS     from "@fingerprintjs/fingerprintjs";
import sliderSplitPane   from "../utils/splitpane"; //Stefano still needed here?
import surflyProxy       from "../utils/surflyLibary";
import db_communication       from "../utils/mongo_communication";
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


  const [editorHeightValue, setEditorHeightValue] = useState("350px");
  const [verticalPaneSize, setverticalPaneSize] = useState(40);
  const [horizontalSize, setHorizontalSize] = useState(50);

  const [jsValue, setJsValue] = useState("");
  const [cssValue, setCssValue] = useState("");
  const [longurlValue, setLongurlValue] = useState("");
  const [shorturlValue, setLShorturlValue] = useState("");
  const [paneValues, setpaneValues] = useState("startpage.html");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [provideProjName, setProvideProjName] = useState(false);

  const [userData, setUserData] = useState([]);
  const [projectId, setprojectId] = useState("");
  const [projectName, setProjectName] = useState("")
  const [currentlyDragged, setCurrentlyDragged]  = useState(false);
  const [userID_from_Fingerprint, setUserID_from_Fingerprint] = useState("");
  const [visitorId, setvisitorId] = useState();



  // const serverURL = process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_DEVURL : process.env.PRODURL;
  const serverURL = 'http://localhost:3000';
  const data4project  = `${serverURL}/api/projectData/${projectQuery}` ;


//   external Libary => load Surfly.com API Proxy
  useEffect( () => { surflyProxy.embedLibary();   }, []);

//   fetchProjectData from MongoDB
  useEffect(() => {
     if(router.isReady) {

         setvisitorId(router.query.userQuery); // store visitorId from router.query-Parameter
        // console.log('ProjectData is now certainly available: because router.isReady:' , router.isReady ,  '. Only if  the "projectQuery" Value does not exists in the widows location query, then our projectQuery value will remain undefined . Otherwise it will be:  ', projectQuery,  )
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
                    getProjectListForUser();
                }
            }
          fetchProjectData();
          setLoading(false);
        }
        else {
          // console.log('no ProjectData is  available', projectQuery)
          setLoading(false);
          getProjectListForUser();
          }
     }
  }, [projectQuery]);





//   get ProjectList from MongoDB
 const  getProjectListForUser =  async  () => {
    const fp = await FingerprintJS.load();
    const result = await fp.get();
    const identificationOfTheVisitor = result.visitorId; //  console.log('visitorIdentifier: ==> (from getProjectListForUser-Func): ',  identificationOfTheVisitor )
    setUserID_from_Fingerprint(identificationOfTheVisitor);
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const usersAPI_url = `${serverURL}/api/users/${identificationOfTheVisitor}`;  //  console.log('usersAPI_url from index.js: ', usersAPI_url)
    const response = await fetch(usersAPI_url, requestOptions);
    const { data } = await response.json(); // console.log('usersAPI_url DATA is =: ', data)
    setUserData(data);
  }



//   Save to MongoDB (New Project)
  const saveNewProject = () => {
     // setUserID_from_Fingerprint(visitorId); // STEFANO DELETE this line LATER
      setSaving(true);
      var meth = "PUT";
              const AutoCreateFileName = (URLstring) => {
                  const StringNoTrialingSlash = URLstring.replace(/\/$/, '');
                  var filename = StringNoTrialingSlash.substring(StringNoTrialingSlash.lastIndexOf('/')+1);
                  return filename;
              }
              // ==> this is a new Project!==> we will empty the pre-existing data (exept for the longurl )
              const requestOptions = {
                method: meth,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  css: '/* your additional CSS Code wil be proxied into: ' + longurlValue + ' */\n/* start coding here   (and click on "look at result") */\n\n.collapseThisLineInThisEditor {\n   color: red;\n   background-color: white;\n  }   ' ,
                  js: '// your additional JS Code wil be proxied into: \n// ' + longurlValue  +'\n// const collapseThisLine = () =>  {\n//console.log( "You can collapse this line --> and manage your space in this js-pane wisely! " } \n\n// start coding here   (and click on "look at result")  \n\n',
                  id: projectQuery,
                  userID: userID_from_Fingerprint,
                  projectName: AutoCreateFileName(longurlValue),
                  longurl: longurlValue
                }),
            };
            db_communication.sendDB_Request(requestOptions, data4project, setSaving, setProvideProjName, userID_from_Fingerprint, router)
}


//   Save to MongoDB (existing User)
  const save = async () => {
    setSaving(true);
    var meth ;
    if (visitorId) {
          // visitor and  user are EQUAL to one another
          if (visitorId == userID_from_Fingerprint) {  // alert('visitor and  user are EQUAL to one another ( value is userID_from_Fingerprint) = so we EITHER Update (overrite) OR Clone the Project  ' );                         console.log('projectQuery = Param aus der window adress bar:  ', projectQuery);
            meth = projectQuery ? "POST" : "PUT"; //  POST = (overwrite) updatedRecord, Put = newRecordId (create new)
          }
          else { // alert("same Project, but different User");
            meth = "PUT";
            alert("We cloned this Project for you. If you wish, You can provide a different name for the Project later. Use the pencil in the top-right-corner to change the Name.   " );
          }
    }
    else {
      alert("This alert should only come up if you are OFFLINE! Take care:  Your result has probably not been stored!");
      setUserID_from_Fingerprint(visitorId);
      meth = "PUT";
    }

    // ProjectName Field is left empty
    if (projectName == " " || projectName == "" ) {
      alert("Please input a new project name");
      setProvideProjName(true);
      setSaving(false);
      return false;
    }


    // inside JS-Pane ==> Replace all alert functions
    if (jsValue.includes("alert(")) {
          setSaving(false);
          const search = 'alert(';
          const replaceWith = 'console.log(';
          const result = jsValue.replaceAll(search, replaceWith);
          setJsValue(result)
          alert("You have used an ALERT inside of your JS-Code! The Alert-method cannot be used within the proxied result-page! Therefore We changed your code on your behalf: PLEASE LOOK AT YOUR CODE AGAIN TO ACKNOWLEDGE THE CHANGE we did: We replaced all your 'Alert('-methods with the 'Console.log('  -method. Please take a look at the change. Afterwards you may want to hit the save button again. You will then be able to save your work. ", result);
      return false;
    }

  //   define request options towards MongoDB
    const requestOptions = {
      method: meth,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        css: cssValue,
        js: jsValue,
        id: projectQuery,
        userID: userID_from_Fingerprint,
        projectName: projectName,
        longurl: longurlValue
      }),
    };
    db_communication.sendDB_Request(requestOptions, data4project, setSaving, setProvideProjName, userID_from_Fingerprint, router)
};


//   Loading indication while waiting for the initial Response from MongoDB
  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div
        className={`toggleView
                ${askLongURL && ' isVisible_TheCreateNewProjectField ' } `+`
                ${!longurlValue &&  ' isVisible_NoActiveProject ' }
            `}
        >

      <div className={styles.header}>




     <ManageProject
         setLongurlValue={setLongurlValue}
         provideProjName={provideProjName}
         setpaneValues={setpaneValues}
         longurlValue={longurlValue}
         projectId={projectId}
         saving={saving}
         save={save}
         setverticalPaneSize={setverticalPaneSize}
         setAskLongURL={setAskLongURL}
         longurlValueTempoary={longurlValueTempoary}
         setLongurlValueTempoary={setLongurlValueTempoary}
         saveNewProject={saveNewProject}
       />



      {/*display the ProjectName and reveal the Project LongURL (on Hover) */}
       <ShowProjName
         longurlValue={longurlValue}
         projectName={projectName}
       />



      {/*User can Manage his/her "account" & "Projects": Delete a Project, Save a Name for a Project, Dropdown to toggle through all Projects of the current User */}
       <ManageUser
          provideProjName={provideProjName}
          projectName={projectName}
          save={save}
          setProvideProjName={setProvideProjName}
          userData={userData}
          projectId={projectId}
          data4project={data4project}
          setProjectName={setProjectName}
          setLongurlValue={setLongurlValue}
          setCssValue={setCssValue}
          setJsValue={setJsValue}
          setprojectId={setprojectId}
          getProjectListForUser={getProjectListForUser}
          projectQuery={projectQuery}
          userID_from_Fingerprint={userID_from_Fingerprint}
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
                              setverticalPaneSize(`${heightFromDragEvent - 40}px`)
                              }}
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