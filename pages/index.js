import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SplitPane from "react-split-pane";
import { CssEditor, JavascriptEditor } from "../components/Editors";
import styles from "./index.module.css";
import { BsTrash, BsX, BsPencil } from "react-icons/bs";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import sliderSplitPane from "../utils/splitpane";
import surflyProxy from "../utils/surflyLibary";
// import Auslagerung from "../utils/mongo_communication";



const Index = () => {

  // 18 useStates
  const [heightValue, setHeightValue] = useState("485px");
  const [verticalSize, setVerticalSize] = useState(40);
  const [horizontalSize, setHorizontalSize] = useState(50);
  const [askLongURL, setAskLongURL] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [provideProjName, setProvideProjName] = useState(false);
  // const [htmlValue, setHtmlValue] = useState("");
  const [jsValue, setJsValue] = useState("");
  const [cssValue, setCssValue] = useState("");
  const [longurlValue, setLongurlValue] = useState("");
  const [longurlValueTempoary, setLongurlValueTempoary] = useState("");
  const [shorturlValue, setLShorturlValue] = useState("");
  const [paneValues, setpaneValues] = useState("startpage.html");
  const [project, setProject] = useState([]);
  const [projectID, setProjectID] = useState("");
  const [projectName, setProjectName] = useState("")
  const [currentlyDragged, setCurrentlyDragged]  = useState(false);
  const [userID_from_Fingerprint, setUserID_from_Fingerprint] = useState("");
  const [visitorID, setVisitorID] = useState();

  const router = useRouter();
  const { id, user_id } = router.query;


  // const serverURL = process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_DEVURL : process.env.PRODURL;
  const serverURL = 'http://localhost:3000';


  const pensAPI_url  = `${serverURL}/api/pens/${id}` ;  //



  useEffect( () => {// call external Libary => Surfly.com API Proxy
          surflyProxy.embedLibary();
  }, []);

  // store visitorID from router.query-Parameter
  useEffect(() => {
          getProjectListForUser();
          if (router.query) {
            setVisitorID(router.query.user_id); //
         }
  }, [user_id]);

  // fetchProjectData from MongoDB
  useEffect(() => {
    if (id) {
       const fetchProjectData = async () => {
            const response = await fetch(pensAPI_url);
            const { data } = await response.json();
                  if (response.status !== 200) {
                    alert("The Project you are trying to access was deleted! There is no ProjectData available anymore. We cannot deliver this projectID. We will forward you to the startpage instead. We hope you are fine with that. ");
                    NewProject_Show();
                    router.push("/");
                  } else {
                setProjectName(data.projectName)
                setLongurlValue(data.longurl)
                // setHtmlValue(data.html);
                setCssValue(data.css);
                setJsValue(data.js);
                setProjectID(id);
            }
        }
      fetchProjectData();
      setLoading(false);
    }
    else {

       // STEFANO work fswith the below some further
      // console.log('ProjectData is not available')
      // if (data._id !== id || undefined === id   ) {
      //     alert('we have an issue we should analyse => the ID in the router query does probably not exist in the MongoDB, desa dev: please replace this alert with sth better ;)' )
      // }
      setLoading(false);
      }
  }, [id]);


  // DropDown-Element Eventhandler  (onClick for Option-Elements)
  const   DropDown_Selection_ProjectList = (event) => {
    if (event.target.value != "") { // console.log('dropdown was clicked => refresh Params in Query:  ',event.target.value,  userID_from_Fingerprint);
       router.push(`?id=${event.target.value}&user_id=${userID_from_Fingerprint}`);
       setProjectID(event.target.value);
    } else { // console.log('option-item has no value, thus nothing shall happen, stefano: delete this else-Statement later ');
      // prevent default !!  das wäre besser, bzw am einfachsten: die Funktionen werden  für's Erste gekillt
      // location.href = "/";
      // setProjectID("");
    }
  }

  // Delete from MongoDB
 const onDelete =  async (id) => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    const response = await fetch(pensAPI_url, requestOptions);
    const { success, data } = await response.json();
    if (success) {
      location.href = "/";
      setProjectID("");
    }
  }


  // get ProjectList from MongoDB
 const  getProjectListForUser =  async  () => {
    const fp = await FingerprintJS.load();
    const result = await fp.get();
    const visitorIdentification = result.visitorId; //  console.log('visitorIdentifier: ==> (from getProjectListForUser-Func): ',  visitorIdentification )
    setUserID_from_Fingerprint(visitorIdentification);
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const usersAPI_url = `${serverURL}/api/users/${visitorIdentification}`;  //  console.log('usersAPI_url from index.js: ', usersAPI_url)
    const response = await fetch(usersAPI_url, requestOptions);
    const { data } = await response.json(); // console.log('usersAPI_url DATA is =: ', data)
    setProject(data);
  }



  // Save to MongoDB (New Project)
  const saveNewProject = (isNewProject) => {
      setSaving(true);
      setUserID_from_Fingerprint(visitorID);
      var meth = "PUT";
         // ==> this is a new Project!
         // ==> we will empty the pre-existing data (exept for the longurl )
        if (isNewProject) {
                const AutoCreateFileName = (URLstring) => {
                    const StringNoTrialingSlash = URLstring.replace(/\/$/, '');
                    var filename = StringNoTrialingSlash.substring(StringNoTrialingSlash.lastIndexOf('/')+1);
                    return filename;
                }
                const requestOptions = {
                  method: meth,
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    // html: ' ',
                    css: '/* your additional CSS Code wil be proxied into: \n   ' + longurlValue + ' */\n\n/* start coding here   (and click on "look at result") */\n\n' ,
                    js: '// your additional JS Code wil be proxied into: \n// ' + longurlValue  +'\n\n // start coding here   (and click on "look at result")  \n\n',
                    id: id,
                    userID: userID_from_Fingerprint,
                    projectName: AutoCreateFileName(longurlValue),
                    longurl: longurlValue
                  }),
              };
              sendDB_Request(requestOptions);
          }
          else {
              alert('// Stefano:  Existing Project (should never happen in this function) : ==> we will not reset the data for MongoDB: we do nothing (and keep the Project data) in this unlikely case. I still want to test on this.   ')
          }
}


  // Save to MongoDB (existing User)
  const save = async () => {
    setSaving(true);
    var meth ;
    if (visitorID) {
                      // visitor and  user are EQUAL to one another
                      if (visitorID == userID_from_Fingerprint) {  // alert('visitor and  user are EQUAL to one another ( value is userID_from_Fingerprint) = so we EITHER Update (overrite) OR Clone the Project  ' );                         console.log('id = Param aus der window adress bar:  ', id);
                        meth = id ? "POST" : "PUT"; //  POST = (overwrite) updatedRecord, Put = newRecordId (create new)
                      }
                      else { // alert("same Project, but different User");
                        meth = "PUT";
                        alert("We cloned this Project for you. You can re-name the Project-Name later if you wish.   " );
                      }
    }
    else {
      alert("STEFANO:  This alert should only come up if you are OFFLINE! Take care:  Your result has probably not been stored!");
      setUserID_from_Fingerprint(visitorID);
      meth = "PUT";
    }

    // STEFANO dwell on this more
    if (projectName == " " || projectName == "" || projectName == "needs_a_name") {
      alert("Please input a new project name");
      setProvideProjName(true);
      setSaving(false);
      // setAskLongURL(true);
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

    const requestOptions = {
      method: meth,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // html: htmlValue,
        css: cssValue,
        js: jsValue,
        id: id,
        userID: userID_from_Fingerprint,
        projectName: projectName,
        longurl: longurlValue
      }),
    };
    // console.log('requestOptions', requestOptions)
    sendDB_Request(requestOptions);
    getProjectListForUser();
  };





// sendDB_Request to MongoDB
const sendDB_Request = async (requestOptions)  => {   // console.log('Result stored in MongoDB: either updatedRecord (true undefined), or we created a newRecordId  (undefined 000000001 ): ',  updatedRecord, newRecordId )

    const response = await fetch(pensAPI_url, requestOptions);
    const {
      data: { updatedRecord, newRecordId },
    } = await response.json();
    setSaving(false);
    setProvideProjName(false);
    if (!updatedRecord) {  // console.log('CLONE CONTENT NOW ==> Only if updatedRecord is FALSE (meaning: POST is false =  meaning we do not have same user AND same project = (thus not OVERWRITE ), ==>we will clone and then update both Params in the adress bar: ', updatedRecord, newRecordId , userID_from_Fingerprint,    )   //
       await router.push(`?id=${newRecordId}&user_id=${userID_from_Fingerprint}`);
    }
}

// open NewProject-Area
  const NewProject_Show =  () => {  // console.log('toggle visibility ');
      sliderSplitPane.closeSlide(setVerticalSize);
      setAskLongURL(true);
      setLongurlValueTempoary(longurlValue)
      setLongurlValue('')
  };

 // close NewProject-Area
 const NewProject_Hide = () => {  // console.log('toggle visibility ');
      sliderSplitPane.openSlide(setVerticalSize);
      setAskLongURL(false);
      setLongurlValue(longurlValueTempoary) // back to old value
  }

// Save the NewProject
 const NewProject_Save = async () => {
 const UrlCheck = validateURL(longurlValue) ;
     if (UrlCheck) {
      saveNewProject(true);
      NewProject_Hide();
     }
     else {
       alert('I assume you did not type in a valid Website-Adress?')
     }
  }


const validateURL = (str) => {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}



    // SURFLY Save => CORS-ISSUE on Localhost
    const  surflyRender = async (projectID) => {
          // console.log('pensAPI_url from index.js: ',  pensAPI_url)
              var timestamp = Date.now();
              if (projectID == "" || projectID == " " ) {
                  alert('Please create a project before you click on SAVE (or work already existing projects) ');
              } else {
                  const SurflyAPIstring = `${serverURL}/api/surfly/${projectID}/?timestamp=`+timestamp;
                  // console.log('SurflyAPIstring with projectID and TimeStamp: ',SurflyAPIstring);
                  const fetchRequestOptions = { method: "GET", headers: { "Content-Type": "application/json; charset=utf-8" } };
                  const getSurflyURL = await fetch(SurflyAPIstring, fetchRequestOptions);
                  const { SurflyResponseURL } = await getSurflyURL.json();
                  if (getSurflyURL.status !== 200) { await router.push("/404"); }
                  setpaneValues(SurflyResponseURL);
              }
        }


    const HandleProjectNameChange = e => {     // Stefano: controlled States = this is also still unfinished business
        setProjectName(e.target.value)
    }
    const HandleLongURL_Change = e => { // console.log('HandleLongURL_Change:  ' , e.target.value ) ;
        setLongurlValue(e.target.value)
    }
    const HandleReturnkey = (e, howToSave) => {     // Stefano: controlled States = this is also still unfinished business
            if (e.key === "Enter") {
                if (howToSave === "NewProject") {
                   NewProject_Save();
                } else {
                   save();
                }
            }
    }




   // const TestDerAuslagerung = () => {
   //   Auslagerung.test();
   //  }




  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }


console.log('heightValue: ', heightValue)
console.log('verticalSize: ', verticalSize)
console.log('horizontalSize: ', horizontalSize)


  return (
    <div
        className={`toggleView
                ${askLongURL && ' isVisible_TheCreateNewProjectField ' } `+`
                ${!longurlValue &&  ' isVisible_NoActiveProject ' }
            `}
        >

      <div className={styles.header}>
        <div className={styles.longURLButtons + ` longURLButtons  `}>
         <span className={` button-group `}>
{/*           <button className={styles.button} onClick={() => { TestDerAuslagerung(); }} >ex func </button>*/}
           <button className={styles.button} onClick={() => { NewProject_Show(); }} > New Project</button>


           <button className={styles.button + ' toggleOnlongURLValue ' } onClick={() => {alert('This is still work in Progress. Nothing happens here: As of yet! ')   }} >Forward Result to a friend</button>
           <button className={styles.button + ' toggleOnlongURLValue ' } onClick={() => { surflyRender(projectID);   }} >Look at Result</button>

           {(provideProjName)  ? '' :
           <button className={styles.button + ' toggleOnlongURLValue ' }  onClick={() => {  save();  } } > {saving ? "Saving..." : "Save"} </button>
           }
         </span>
          <br/>
          <input  type="url"  value={longurlValue} className={` longURLInput form-control form-input `}
          style={{ display: "none" }} placeholder="enter any valid Internet-Website-Adress here (or look at examples)"
          onChange={HandleLongURL_Change}
          onKeyUp={() => { HandleReturnkey(event,'NewProject')} }
          >
          </input>
          <span className={` newProjectButtons  `} style={{ display: "none" }}>


           <button
             className={styles.button + ' isVisible_TheCreateNewProjectField'}
             onClick={() => { NewProject_Save(); }} >
             create new project
           </button>
             <BsX    className="bootstrapButton" style={{ color: "white", fontSize: 36 }}
                     onClick={() => {NewProject_Hide(); }}/>
          </span>
           <p className={` slogan  `} style={{ display: "none" }}>You can change any static Website!</p>
        </div>
        <div className={styles.customURL + ` customURL   `}>
           {longurlValue && <span> {projectName && projectName } : &nbsp; <span> {longurlValue}</span></span> }  {/*Change this Website*/}
        </div>
        <div className={styles.customSelect + ` customSelect custom-select `}>
                        <>
                          <input
                            className={`
                              projectName-InputField form-control form-input
                              ${provideProjName && ' provideProjName '  }
                              ${(projectName == " " || projectName == "" || projectName == "needs_a_name") ? ' doBlink ':' doNotBlink '}
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

                {project && project.length > 0 &&
                  <BsTrash style={{ color: "white", fontSize: 36 }}
                  onClick={() => {
                                      if (window.confirm('Are you sure you wish to delete this Website-Manipulation-Project?')) { onDelete(projectID) }
                                  }
                          }
                  />
                }

                {project && project.length > 0 && (
                  <select
                    className="projectName-DropdownField  form-control form-input"
                    style={{ width: 240 }}
                    value={projectID && projectID }
                    onChange={DropDown_Selection_ProjectList}
                  >
                    <option value="">all your projects: </option>
                    {project.map((item, i) => {
                      return (
                        <option key={i} value={item._id}>
                          {item.projectName ? item.projectName : 'needs_a_name'}
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
        size={`${verticalSize}%`}
        minSize={"50%"}
        onDragStarted={() => { //console.log('onDragStarted')
              setCurrentlyDragged(true)
           }
         }
        onDragFinished={(heightFromDragEvent) => {
            setCurrentlyDragged(false)
            setHeightValue(`${heightFromDragEvent - 40}px`);
          }
        }
      >

          <SplitPane
              split="vertical"
              minSize="50%"
              size={`${horizontalSize}%`}
          >
            <CssEditor
              height={heightValue}
              horizontalSize={horizontalSize}
              value={cssValue}
              onChange={setCssValue}
              setVerticalSize={setVerticalSize}
              setHorizontalSize={setHorizontalSize}
            />
            <JavascriptEditor
              height={heightValue}
              horizontalSize={horizontalSize}
              value={jsValue}
              onChange={setJsValue}
              setVerticalSize={setVerticalSize}
              setHorizontalSize={setHorizontalSize}
            />
          </SplitPane>
          <iframe
              key={paneValues}
              src={paneValues}
              id="resultFrame"
              name="resultFrame"
              className={styles.previewIframe + `    resultFrame ${currentlyDragged &&   styles.isInteractive  } ` }
               >
         </iframe>
      </SplitPane>
    </div>
  );
};

export default Index;
