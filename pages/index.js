import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SplitPane from "react-split-pane";
import { CssEditor, HtmlEditor, JavascriptEditor } from "../components/Editors";
import { useDebounce } from "../utils/useDebounce";
import styles from "./index.module.css";
import { BsTrash, BsPlay, BsX, BsPencil } from "react-icons/bs";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
// import Auslagerung from "../utils/mongo_communication";
import Splitpane from "../utils/splitpane";

const Index = () => {


  const serverURL = process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_DEVURL : process.env.PRODURL;
  // console.log( 'process.env.NODE_ENV ',  process.env.NODE_ENV  )
  // console.log( 'process.env.PRODURL' , process.env.PRODURL)
  // console.log( 'process.env.NEXT_PUBLIC_DEVURL',  process.env.NEXT_PUBLIC_DEVURL  )
  // console.log( 'serverURL: ', serverURL)




  const [heightValue, setHeightValue] = useState("485px");
  const [codePenSizeValue, setCodePenSizeValue] = useState(40);


  const [askLongURL, setAskLongURL] = useState(false);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [provideProjName, setProvideProjName] = useState(false);

  const [htmlValue, setHtmlValue] = useState("");
  const [jsValue, setJsValue] = useState("");
  const [cssValue, setCssValue] = useState("");
  const [longurlValue, setLongurlValue] = useState("");
  const [longurlValueTempoary, setLongurlValueTempoary] = useState("");
  const [shorturlValue, setLShorturlValue] = useState(" ");
  const [paneValues, setpaneValues] = useState("startpage.html");
  const [project, setProject] = useState([]);
  const [projectID, setProjectID] = useState("");
  const [projectName, setProjectName] = useState("")

  const debouncedHtml = useDebounce(htmlValue, 1000);
  const debouncedJs = useDebounce(jsValue, 1000);
  const debouncedCss = useDebounce(cssValue, 1000);

  const router = useRouter();
  const [visitorID, setVisitorID] = useState();
  const [userID_from_Fingerprint, setUserID_from_Fingerprint] = useState("");
  const { id, user_id } = router.query;
  // console.log('id: ', id);
  // console.log('analyse number of rerendering-events')


    // This state is tracking whether or not the user is dragging the SplitPane borders to change
    // its sizing.  If so, then we have to set the child elements to "pointer-events: none" so
    // the child events don't prevent smooth dragging
  const  [isDragging, setIsDragging]  = useState(false);





 const pensAPI_url  = `${serverURL}/api/pens/${id}` ;  //


// const closeSlide = () => {
//   var i = 40;                  //  set your counter to 40
// function myLoop() {         //  create a loop function
//   setTimeout(function() {   //  call a setTimeout when the loop is called
//     console.log('hello'+i);   //  your code here
//     setCodePenSizeValue(i)
//     i= i-4;                    //  decrement the counter by 4
//     if (i > -1) {           //  if the counter > -1, call the loop function
//       myLoop();             //  ..  again which will trigger another
//     }                       //  ..  setTimeout()
//   }, 80)
// }
// myLoop();                   //  start the loop
// }


// const openSlide = () => {
//   var i = 0;                  //  set your counter to 40
// function myLoop() {         //  create a loop function
//   setTimeout(function() {   //  call a setTimeout when the loop is called
//     console.log('hello'+i);   //  your code here
//     setCodePenSizeValue(i)
//     i= i+4;                    //  decrement the counter by 4
//     if (i < 41) {           //  if the counter > -1, call the loop function
//       myLoop();             //  ..  again which will trigger another
//     }                       //  ..  setTimeout()
//   }, 80)
// }
// myLoop();                   //  start the loop
// }






  // on useEffect run getAllUserProjects (in user_id changes in the Adressbar or on PAgeload)
  useEffect(() => { // console.log('useEffect to call getAllUserProjects-Function')
          getAllUserProjects();

          // we set the setVisitorID to the value of the userID_from_Fingerprint in the adressbar )
          if (router.query) {// console.log('router query does have data ==> ',  router.query )
            setVisitorID(router.query.user_id); //  console.log(' userID_from_Fingerprint is set to:  ==> ', router.query.user_id )
            console.log('visitorID was set to ', router.query.user_id)
         }
  }, [user_id]);




  // API PENS
  useEffect(() => {
    //  console.log("api Pens  ")
        const fetchData = async () => { // console.log('pensAPI_url from index.js: ',  pensAPI_url)
           const response = await fetch(pensAPI_url);
           const { data } = await response.json();
            if (response.status !== 200) {
              alert("there is no page for this projectID");
             // await router.push("/404");  //  create specific 404 for this case
            }
            setProjectName(data.projectName)
            setLongurlValue(data.longurl)
            setHtmlValue(data.html);
            setCssValue(data.css);
            setJsValue(data.js);
            setProjectID(id);
            setLoading(false);
        }
    if (id) { //  console.log('projectID EXISTS ==> fetchData for id= ',  id)
       fetchData();
      }
      else {  //  console.log('projectID MISSING' )
      setLoading(false);
      }

  }, [id]);


  // useEffect( () => {
  //   const paneOutput = `<html>
  //                   <style>
  //                   ${debouncedCss}
  //                   </style>
  //                   <body>
  //                   ${debouncedHtml}
  //                   <script type="text/javascript">
  //                   ${debouncedJs}
  //                   </script>
  //                   </body>
  //                 </html>`;
  //   // setpaneValues(paneOutput);

  //   if (projectID === "" || projectID === " " ) {
  //       console.log('UseEffect: projectID = NO ==>   so we will NOT get the ProjectData for projectID= ', projectID);
  //   } else {
  //       console.log('UseEffect: projectID = YES ==>  so we will get the ProjectData now for projectID= ', projectID);
  //       getAllUserProjects();
  //   }
  // }, [debouncedHtml, debouncedCss, debouncedJs]);




// EXTERNAL SURFLY LIBARY is loaded here and not in app.js in the head
// in order to minimize unnessesary reloading
  useEffect( () => { // console.log('surfly Libary will be loaded ');
          (function (s, u, r, f, l, y) {
            s[f] = s[f] || {
              init: function () {
                s[f].q = arguments;
              }
            };
            l = u.createElement(r);
            y = u.getElementsByTagName(r)[0];
            l.async = 1;
            l.src = "https://surfly.com/surfly.js";
            y.parentNode.insertBefore(l, y);
          })(window, document, "script", "Surfly");
  }, []);




  // User-DROPDOWN for all Projects of this user
  function ChangeProjectViewForUser(event) {
    // console.log('  Dropdown changed: ',event.target.value,  userID_from_Fingerprint);
    if (event.target.value != "") {
      // console.log('userID_from_Fingerprint ', userID_from_Fingerprint)
      // console.log('event.target.value ', event.target.value )
       router.push(`?id=${event.target.value}&user_id=${userID_from_Fingerprint}`);
       setProjectID(event.target.value);
    } else {
      location.href = "/";
      setProjectID("");
    }
  }

 const onDelete =  async (id) => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

     // console.log('pensAPI_url from index.js: ',  pensAPI_url)
    const response = await fetch(pensAPI_url, requestOptions);
    const { success, data } = await response.json();
    if (success) {
      location.href = "/";
      setProjectID("");
    }
  }

// getAllUserProjects  = get all  data for all projects for this specific user only
 const  getAllUserProjects =  async  () => { // console.log('getAllUserProjects will start , should be in UseEffect I guess')
    const fp = await FingerprintJS.load();
    const result = await fp.get();
    const visitorIdentification = result.visitorId; //  console.log('visitorIdentifier: ==> (from getAllUserProjects-Func): ',  visitorIdentification )
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



  const saveNewProject =  (saveNewProject) => {

      setSaving(true);

        // STEFANO CLEAN THIS UP
        // await router.push(``);  // location.href = "/";
        // setUserID_from_Fingerprint("fakeValue") // this will make sure a new project will be created also if the user is known and already is on an existing project
        // SEE LOADING INTERFACE by LONG-LOADING-TIME FAKED:    //  await  new Promise((resolve) => {  setTimeout(() => resolve(), 4000);  });
      setUserID_from_Fingerprint(visitorID);
      var meth = "PUT";

   // check if save(true) was called ==> if true then it is a new Project and we will empty the potentially pre-existing data (exept for the longurl )
  if (saveNewProject) {

        console.log('we will create a new project. We will want to overwrite several values by empty strings');
          // requestOptions.headers = { "Content-Type": "application/json" };
        console.log('requestOptions before ', requestOptions)
        const requestOptions = {
            method: meth,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              html: ' ',
              css: '/* your additional CSS Code wil be proxied into: \n   ' + longurlValue + ' */\n\n/* start coding here */\n\n' ,
              js: '// your additional JS Code wil be proxied into: \n// ' + longurlValue  +'\n\n // start coding here \n\n',
              id: id,
              userID: userID_from_Fingerprint,
              projectName: '',
              longurl: longurlValue
            }),
        };
        console.log('requestOptions AFTER ', requestOptions)

        sendDB_Request(requestOptions);


    }
    // Stefano:  Existing Project (should never happen in this function)
    else {
        console.log('Existing Project: ==> we will not reset the data for MongoDB: we do nothing (and keep the Project data)  ')
    }
}




  const save = async () => {

    setSaving(true);

    var meth = "PUT";

    // almost always there will be an existing VisitorID (fingerPrint)
    if (visitorID) {
                      // visitor and  user are EQUAL to one another
                      if (visitorID == userID_from_Fingerprint) { //
                        alert('visitor and  user are EQUAL to one another ( value is userID_from_Fingerprint) = so we EITHER Update (overrite) OR Clone the Project ((IF there is a PORJECTID )   ' );
                        console.log('next we check for the Existance of a ProjectID via the Params-Value  ' );
                        console.log('id = Param aus der window adress bar:  ', id);
                        //  POST = (overwrite) updatedRecord, Put = newRecordId (create new)
                        meth = id ? "POST" : "PUT";
                      }
                      // same Project, but different User
                      else {
                       //
                        alert("same Project, but different User");
                          meth = "PUT";
                          // console.log('visitorID soll existieren, zeig her: ' , visitorID )
                          // console.log('userID_from_Fingerprint soll existieren ABER UNGLEICH SEIN , zeig her: ' , userID_from_Fingerprint )
                        // alert("We cloned this Project for you. You can re-name the Project-Name  for your own Project if you prefer a different ProjectName ! ");
                        // setUserID_from_Fingerprint(visitorID) // seems to be disregarded too
                        //  setProjectName(" "); // setProvideProjName(true); // setting the Project Name here takes no effect because .... What the heck is actually happening here?!
                        //  Comment: Put , that means  newRecordId, we create a new Project
                        // setHtmlValue('NewProject_Save test string ')
                          // console.log('before wait')
                      }
    }
    // this must be a new Project for a new user (Stefano, is this else statement really required at all? )
    else {
     //
      alert("new Project for a new user (either with or without existing data)");
      setUserID_from_Fingerprint(visitorID);
        // Put = newRecordId
      meth = "PUT";
    }




    // do I want this? this should be overhauwled
    if (projectName == " " || projectName == "") {
      alert("Please input project name");
      setProvideProjName(true);
      setSaving(false);
      setAskLongURL(true);
      return false;
    }



    const requestOptions = {
      method: meth,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        html: htmlValue,
        css: cssValue,
        js: jsValue,
        id: id,
        userID: userID_from_Fingerprint,
        projectName: projectName,
        longurl: longurlValue
      }),
    };
  console.log('requestOptions', requestOptions)


    sendDB_Request(requestOptions);

  //  getAllUserProjects(); // stefano, we may get rid of this line as it will be executed via uesEffect again. (still need to check if it is the case in all nessesary cases though)
  };





const sendDB_Request = async (requestOptions)  => {
  console.log('requestOptions from new Function with the very same name: ', requestOptions);


    console.log('pensAPI_url from index.js: ',  pensAPI_url)
    const response = await fetch(pensAPI_url, requestOptions);
    const {
      data: { updatedRecord, newRecordId },
    } = await response.json();
    console.log('The Result is stored to the DB now: we have  either updatedRecord (true undefined), or created a newRecordId  (undefined 000000001 ): ',  updatedRecord, newRecordId )

    setSaving(false);

    if (!updatedRecord) {
     console.log('CLONE CONTENT NOW ==> Only if updatedRecord is FALSE (meaning: POST is false =  meaning we do not have same user AND same project = (thus not OVERWRITE ), ==>we will clone and then update both Params in the adress bar: ', updatedRecord, newRecordId , userID_from_Fingerprint,    )   //


          //  SEE LOADING INTERFACE by LONG-LOADING-TIME FAKED:    // await  new Promise((resolve) => {  setTimeout(() => resolve(), 4000);  });

      await router.push(`?id=${newRecordId}&user_id=${userID_from_Fingerprint}`);
    }


}


  const NewProject_Start =  () => {  // console.log('toggle visibility ');
      setAskLongURL(true);
      Splitpane.closeSlide(setCodePenSizeValue);
      setLongurlValueTempoary(longurlValue)
      setLongurlValue('')
  };
 const NewProject_onClose = () => {  // console.log('toggle visibility ');
      setAskLongURL(false);
      Splitpane.openSlide(setCodePenSizeValue);
      setLongurlValue(longurlValueTempoary) // back to old value
  }

// STEFANO , you can use saveNewProject directly here
 const NewProject_Save = async () => { // console.log(' start new project ');
      // setProjectID(" ");  // this takes no effect whatsoever
      saveNewProject(true);
      NewProject_onClose()
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



   // const TestDerAuslagerung = () => {
   //   Auslagerung.test();
   //  }




  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }



// console.log('userID_from_Fingerprint:  ', userID_from_Fingerprint)
// console.log('paneValues:  ', paneValues)
// console.log('longurlValue: ',longurlValue)




  return (
    <div  className={`toggleView ${askLongURL && ' createNewProjectNow ' }  `} >

      <div className={styles.header}>
        <div className={styles.longURLButtons + ` longURLButtons  `}>
         <span className={` button-group `}>
{/*           <button className={styles.button} onClick={() => { TestDerAuslagerung(); }} >ex func </button>*/}
           <button className={styles.button} onClick={() => {alert('This is still work in Progress. Nothing happens here: As of yet! ')   }} > Send Result to friend </button>
           <button className={styles.button} onClick={() => { surflyRender(projectID);   }} > Look at Result </button>
           <button className={styles.button} onClick={() => { NewProject_Start(); }} > New Project</button>


        {provideProjName ? '' :
           <button className={styles.button}  onClick={() => {  save();  } } > {saving ? "Saving..." : "Save"} </button>
        }
         </span>
          <br/>
          <input  type="url"  value={longurlValue} className={` longURLInput form-control form-input `}
          style={{ display: "none" }} placeholder="enter any valid Internet-Website-Adress here (or look at examples)"
          onChange={HandleLongURL_Change} >
          </input>
          <span className={` newProjectButtons  `} style={{ display: "none" }}>


           <button
             className={styles.button + ' createNewProject'}
             onClick={() => { NewProject_Save(); }} >
             create new project
           </button>
            {/* <BsPlay className="bootstrapButton" style={{ color: "white", fontSize: 36 }}
                     onClick={() => {  NewProject_Save();  } }/>*/}
             <BsX    className="bootstrapButton" style={{ color: "white", fontSize: 36 }}
                     onClick={() => {NewProject_onClose(); }}/>
          </span>
           <p className={` slogan  `} style={{ display: "none" }}>You can change any static Website!</p>
        </div>
        <div className={styles.customURL + ` customURL   `}>
           {longurlValue && <span> :<span> {longurlValue}</span></span> }  {/*Change this Website*/}
        </div>
        <div className={styles.customSelect + ` customSelect custom-select `}>
                        <>
                          <input
                            className={` projectName-InputField form-control form-input ${provideProjName && ' provideProjName '  } `}
                            style={{ visibility: "hidden" }}
                            value={projectName}
                            placeholder="provide Project Name"
                            onChange={ HandleProjectNameChange }
                            >
                           </input>
                          <button
                              style={{ visibility: "hidden" }}
                              className={ styles.button + ` SaveButton-for-ProjName form-control form-input ${provideProjName ? ' provideProjName ' : '' } ` }
                              onClick={() => {  save(); setProvideProjName(false);} } >Save
                          </button>
                        </>


                {!provideProjName && <BsPencil style={{ color: "white", fontSize: 36 }} onClick={() => { setProvideProjName(true) } } /> }

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
                    onChange={ChangeProjectViewForUser}
                  >
                    <option value="">all your projects: </option>
                    {project.map((item, i) => {
                      return (
                        <option key={i} value={item._id}>
                          {item.projectName ? item.projectName : 'needs_a_name '}
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
        size={`${codePenSizeValue}%`}
        minSize={"50%"}
        onDragStarted={() => { //console.log('onDragStarted')
              setIsDragging(true)
           }
         }
        onDragFinished={(height) => {
            setIsDragging(false)
            setHeightValue(`${height - 40}px`);
          }
        }
      >
        <SplitPane split="vertical" minSize={"33%"}>
          <HtmlEditor
            height={heightValue}
            value={htmlValue}
             onChange={setHtmlValue}
          />
          <SplitPane split="vertical" minSize={"50%"}>
            <CssEditor
              height={heightValue}
              value={cssValue}
              onChange={setCssValue}
            />
            <JavascriptEditor
              height={heightValue}
              value={jsValue}
              onChange={setJsValue}
            />
          </SplitPane>
        </SplitPane>
          <iframe
              key={paneValues}
              src={paneValues}
              id="resultFrame"
              name="resultFrame"
              // we toggle the boolean Value for the useState-Hook called: IsDragging
              // see index.module.css for an in depth explanation: selector = .isInteractive!
              className={styles.previewIframe + `    resultFrame ${isDragging &&   styles.isInteractive  } ` }
               >
         </iframe>
      </SplitPane>
    </div>
  );
};

export default Index;
