import React, { useState, useEffect } from "react";
import { useRouter }      from "next/router";
import surflyProxy        from "../../utils/surflyLibary";
import sliderSplitPane    from "../../utils/splitpane";
import manageProjects     from "../../utils/manageProjects";
import styles             from "../../pages/index.module.css";
import { BsX }            from "react-icons/bs";
import db_communication   from "../../utils/mongo_communication";


 const ManageProject = ({
   setProvideProjName,
   userID_from_Fingerprint,
   projectQuery,
   setSaving,
   longurlValueTempoary,
   setLongurlValueTempoary,
   setpaneValues,
   provideProjName,
   setLongurlValue,
   longurlValue,
   saving,
   setverticalPaneSize,
   setAskLongURL,
   setUserID_from_Fingerprint,
   visitorId,
   projectName,
   jsValue,
   setJsValue,
   cssValue,
   setLoading
 }) => {


  const router = useRouter();


// ENV Vars in DEV and Production
  const serverURL = process.env.NEXT_PUBLIC_PRODURL;

  const data4project  = `${serverURL}/api/projectData/${projectQuery}` ;

//   Save to MongoDB (New Project)
  const saveNewProject = () => {
      setSaving(true);
      var meth = "PUT";
              const AutoCreateFileName = (URLstring) => {
                  const StringNoTrialingSlash = URLstring.replace(/\/$/, '');
                  var filename = StringNoTrialingSlash.substring(StringNoTrialingSlash.lastIndexOf('/')+1);
                  return filename;
              }


              // add HTTPS-Protocol if not present
              const newLongurlValue = (longurlValue) => {
                return  (!longurlValue.match(/^[a-zA-Z]+:\/\//)) ?   ('https://' + longurlValue)  :  longurlValue
              }


              // ==> new Project has empty data exept for longurl
              const requestOptions = {
                method: meth,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  css: '/* your additional CSS Code wil be proxied into: ' + longurlValue + ' */\n/* start coding here   (and click on "look at result") */\n\n.collapseThisLineInThisEditor {\n    color: #0f5132;\n    background-color: wheat;\n    font-size: 1.4rem;\n}   ' ,
                  js: '// your additional JS Code wil be proxied into: \n\n// ' + longurlValue  +'\n\n// const collapseThisLine = () =>  {\n//console.log( "You can collapse this line --> and manage your space in this js-pane wisely! " } \n\n// // click on the Button: "Look at Result" after you started coding here\n\n',
                  id: projectQuery,
                  userID: userID_from_Fingerprint,
                  projectName: AutoCreateFileName(longurlValue),
                  longurl: newLongurlValue(longurlValue)
                }),
            };
            db_communication.sendDB_Request(requestOptions, data4project, setSaving, setProvideProjName, userID_from_Fingerprint, router)
}

//    Handle LongURL-Value inside of Inputfield
      const HandleLongURL_Change = e => {
          setLongurlValue(e.target.value)
      }

//    ReturnKey for  input field:
      const HandleReturnkey = (e, howToSave) => {
          if (e.key === "Enter") {
            NewProject_Save();
          }
      }

//   Save the NewProject
     const NewProject_Save = () => {
       const UrlCheck =  manageProjects.validateURL(longurlValue) ;
       if (UrlCheck) {
          saveNewProject();
           manageProjects.NewProject_Hide(sliderSplitPane, setverticalPaneSize, setAskLongURL, setLongurlValue, longurlValueTempoary );
       }
       else {
           alert('I assume you did not type in a valid Website-Adress?')
       }
     }




 return (

  <div className={styles.longURLButtons + ` longURLButtons  `}>
   <span className={` button-group `}>

     {/* Button to create new Project */}
     <button
       className={styles.button}
       onClick={() => { manageProjects.newProject_Show(sliderSplitPane, setverticalPaneSize, setAskLongURL, setLongurlValueTempoary, longurlValue, setLongurlValue    ); }} >
       New Project
     </button>

     {/* Button to forward result to friend*/}
     <button
       className={styles.button + ' toggleOnlongURLValue ' }

       onClick={() => {
         alert('The Resultpage will be opened in a new tab now. Grab your URL from there!')
         window.open(`/short?projectQuery=${projectQuery}`, "_blank");  }} >
       Forward Result
     </button>

     {/* Button to request the proxied result*/}
     <button
       className={styles.button + ' toggleOnlongURLValue ' }
       onClick={() => {
         // save: we want to "save" the latest user-data before we start to render
         db_communication.save(data4project, setSaving, visitorId, userID_from_Fingerprint, projectQuery, projectName, setProvideProjName, jsValue, setJsValue, cssValue, longurlValue, router, setUserID_from_Fingerprint);

         // start to Render the result into the iframe
         surflyProxy.surflyRender(projectQuery, setpaneValues, setLoading) }} >
       Look at Result
     </button>

    {/* Button to save work */}
     {(provideProjName)  ? '' :
     <button
       className={styles.button + ' toggleOnlongURLValue ' }
       onClick={() => {
         // save
         db_communication.save(data4project, setSaving, visitorId, userID_from_Fingerprint, projectQuery, projectName, setProvideProjName, jsValue, setJsValue, cssValue, longurlValue, router, setUserID_from_Fingerprint);
       } } >
       {saving ? "Saving..." : "Save"} </button>
     }
   </span>

    <input
      type="url"
      value={longurlValue}
      className={` longURLInput form-control form-input `}
      style={{ display: "none" }} placeholder="enter any valid Internet-Website-Adress here (or look at examples below)"
      onChange={HandleLongURL_Change}
      onKeyUp={() => { HandleReturnkey(event,'NewProject')} }
    >
    </input>
    <span
      className={` newProjectButtons `} style={{ display: "none" }}>
       <button
         onClick={() => { NewProject_Save(); }}
         className={styles.button + ' isVisible_TheCreateNewProjectField'}  >
         create a new project {/*(confirm Website-URL)*/}
       </button>
       <BsX
         onClick={() => {manageProjects.NewProject_Hide(sliderSplitPane, setverticalPaneSize, setAskLongURL, setLongurlValue, longurlValueTempoary );  }}
         className="bootstrapButton"
         style={{ color: "white", fontSize: 36 }} />
    </span>
     <p
       className={` slogan  `}
       style={{ display: "none" }}>
       Change any static Website!
     </p>

   </div>
 )
}

export default ManageProject