import React, { useState, useEffect } from "react";
import surflyProxy     from "../../utils/surflyLibary";
import sliderSplitPane from "../../utils/splitpane";
import manageProjects  from "../../utils/manageProjects";
import styles          from "../../pages/index.module.css";
import { BsX }         from "react-icons/bs";

 const ManageProject = ({  longurlValueTempoary, setLongurlValueTempoary,  projectId, setpaneValues, provideProjName, setLongurlValue, longurlValue,  saving, save, saveNewProject, setverticalPaneSize, setAskLongURL }) => {

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
     const NewProject_Save = async () => {
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
       onClick={() => {alert('This is still work in Progress. Nothing happens here: As of yet! ')   }} >
       Forward Result to a friend
     </button>

     {/* Button to request the proxied result*/}
     <button
       className={styles.button + ' toggleOnlongURLValue ' }
       onClick={() => {surflyProxy.surflyRender(projectId, setpaneValues);   }} >
       Look at Result
     </button>

    {/* Button to save work */}
     {(provideProjName)  ? '' :
     <button
       className={styles.button + ' toggleOnlongURLValue ' }
       onClick={() => {  save();  } } >
       {saving ? "Saving..." : "Save"} </button>
     }
   </span>

    <input
      type="url"
      value={longurlValue}
      className={` longURLInput form-control form-input `}
      style={{ display: "none" }} placeholder="enter any valid Internet-Website-Adress here (or look at examples)"
      onChange={HandleLongURL_Change}
      onKeyUp={() => { HandleReturnkey(event,'NewProject')} }
    >
    </input>
    <span
      className={` newProjectButtons `} style={{ display: "none" }}>
       <button
         onClick={() => { NewProject_Save(); }}
         className={styles.button + ' isVisible_TheCreateNewProjectField'}  >
         create new project
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