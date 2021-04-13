import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SplitPane from "react-split-pane";
import { CssEditor, JavascriptEditor } from "../components/Editors";
import styles from "./index.module.css";
import { BsTrash, BsX, BsPencil } from "react-icons/bs";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import sliderSplitPane from "../utils/splitpane"; //Stefano still needed here?
import surflyProxy from "../utils/surflyLibary";
import Auslagerung from "../utils/mongo_communication";
import ManageProject from '../components/ManageProject'

const Index = () => {


  // STEFANO DELETE THIS AGAIN LATER
  const tester = () => {
    console.log('test triggering Func')
  }

  const router = useRouter();
  const { projectQuery, userQuery } = router.query;


  const [askLongURL, setAskLongURL] = useState(false);

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
                        NewProject_Show(); // STEFANO CANNOT WORK ANYMORE
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


//   DropDown-Element Eventhandler  (onClick for Option-Elements)
  const   ProjectList4User_DropDown = (event) => {
    if (event.target.value != "") { // console.log('dropdown was clicked => refresh Params in Query:  ',event.target.value,  userID_from_Fingerprint);
       router.push(`?projectQuery=${event.target.value}&userQuery=${userID_from_Fingerprint}`);
       setprojectId(event.target.value);
    } else {
       // console.log('option-item has no value, thus nothing shall happen ');
    }
  }

//   Delete from MongoDB
 const onDelete =  async () => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    const response = await fetch(data4project, requestOptions);
    const { success } = await response.json();
    if (success) { //  console.log('INSTEAD OF:  location.href = "/";    we will do the below 6 things:' )
        router.push("/");
        setProjectName('')
        setLongurlValue('')
        setCssValue('');
        setJsValue('');
        setprojectId("");
        getProjectListForUser();
    }
 }


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
                  css: '/* your additional CSS Code wil be proxied into: ' + longurlValue + ' */\n/* start coding here   (and click on "look at result") */\n\n' ,
                  js: '// your additional JS Code wil be proxied into: \n// ' + longurlValue  +'\n// const collapseThisLine = () =>  {\n//console.log( "You can collapse this line --> and manage your space in this js-pane wisely! " } \n\n// start coding here   (and click on "look at result")  \n\n',
                  id: projectQuery,
                  userID: userID_from_Fingerprint,
                  projectName: AutoCreateFileName(longurlValue),
                  longurl: longurlValue
                }),
            };
            sendDB_Request(requestOptions);
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

    sendDB_Request(requestOptions);
    // getProjectListForUser();
};


//   sendDB_Request to MongoDB
const sendDB_Request = async (requestOptions)  => {   //   console.log('Result stored in MongoDB: either updatedRecord (true undefined), or we created a newRecordId  (undefined 000000001 ): ',  updatedRecord, newRecordId )

    const response = await fetch(data4project, requestOptions);
    const {
      data: { updatedRecord, newRecordId },
    } = await response.json();
    setSaving(false);
    setProvideProjName(false);
    if (!updatedRecord) {  // console.log('CLONE CONTENT NOW ==> Only if updatedRecord is FALSE (meaning: POST is false =  meaning we do not have same user AND same project = (thus not OVERWRITE ), ==>we will clone and then update both Params in the adress bar: ', updatedRecord, newRecordId , userID_from_Fingerprint,    )   //
       await router.push(`?projectQuery=${newRecordId}&userQuery=${userID_from_Fingerprint}`);

    }
}

//   ProjectName Input Field
  const HandleProjectNameChange = e => {
      setProjectName(e.target.value)
  }
//   ReturnKey for both fields: (ProjectName- & URL-Input)
  const HandleReturnkey = (e, howToSave) => {
          if (e.key === "Enter") {
              if (howToSave === "NewProject") {
                 NewProject_Save();
              } else {
                 save();
                 getProjectListForUser()
              }
          }
  }

//   get Mouse-Position for the Vertical SplitPane-DragHandler
    const CalcWidthPosition = (size) => {
     let intViewportWidth =  window.innerWidth;
     let rightPosition    =  (intViewportWidth - size); // size-value is counted upwards from the right by default:
     let leftPosition     =  (intViewportWidth - rightPosition );  // we are switching that logic around
     let ViewPortPosition = ((leftPosition  /  intViewportWidth ) * 100 ).toFixed(2);
     return ViewPortPosition;
    }

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

{/*     <button className={styles.button} onClick={() => { Auslagerung.test(tester); }} >ex func </button>
*/}
     <ManageProject
         HandleReturnkey={HandleReturnkey}
         setLongurlValue={setLongurlValue}
         provideProjName={provideProjName}
         setpaneValues={setpaneValues}
         longurlValue={longurlValue}
         projectId={projectId}
         saving={saving}
         save={save}
         setverticalPaneSize={setverticalPaneSize}
         setAskLongURL={setAskLongURL}
         saveNewProject={saveNewProject}
       />


      {/*display the ProjectName and reveal the Project LongURL (on Hover) */}
        <div className={styles.customURL + ` customURL   `}>
           {longurlValue && <span> {projectName && projectName }   &nbsp; <span> {longurlValue}</span></span> }
        </div>


      {/*User can Manage his/her "account" & "Projects": Delete a Project, Save a Name for a Project, Dropdown to toggle through all Projects of the current User */}
        <div className={styles.customSelect + ` customSelect custom-select `}>
                        <>
                          <input
                            className={`
                              projectName-InputField form-control form-input
                              ${provideProjName && ' provideProjName '  }
                              ${(projectName == " " || projectName == "" ) ? ' doBlink ':' doNotBlink '}
                             `}
                            style={{ visibility: "hidden" }}
                            value={projectName}
                            placeholder="provide Project Name"
                            onChange={ HandleProjectNameChange }
                            onKeyUp={() => { HandleReturnkey(event,'saveRegular')} }
                            >
                           </input>

                          <button
                              style={{ visibility: "hidden" }}
                              className={ styles.button + ` SaveButton-for-ProjName form-control form-input ${provideProjName ? ' provideProjName ' : '' } ` }
                              onClick={() => { save(); } } >Save
                          </button>
                        </>

                {!provideProjName && <BsPencil
                      style={{ color: "white", fontSize: 36 }}
                      onClick={() => { setProvideProjName(true) } }
                      className=' toggleOnlongURLValue '
                       /> }

                {userData && userData.length > 0 &&
                  <BsTrash style={{ color: "white", fontSize: 36 }}
                  onClick={() => {
                                      if (window.confirm('You wish to delete this Project. Are you sure?')) { onDelete() }
                                  }
                          }
                  />
                }

                {userData && userData.length > 0 && (
                  <select
                    className="projectName-DropdownField  form-control form-input"
                    style={{ width: 240 }}
                    value={projectId && projectId }
                    onChange={ProjectList4User_DropDown}
                  >
                    <option value="">all your projects: </option>
                    {userData.map((item, i) => {
                      return (
                        <option key={i} value={item._id}>
                          {item.projectName && item.projectName}
                        </option>
                      );
                    })}
                  </select>
                )}

        </div>
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
              onDragFinished={(size) => { setHorizontalSize(CalcWidthPosition(size)) }}
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