import React, { useState, useEffect } from "react";
import surflyProxy     from "../../utils/surflyLibary";
import sliderSplitPane from "../../utils/splitpane";
import manageProjects  from "../../utils/manageProjects";
import styles          from "../../pages/index.module.css";
import { BsX }         from "react-icons/bs";



 const ManageProject = ({  projectId, setpaneValues, provideProjName, setLongurlValue, longurlValue,  HandleReturnkey, saving, save, saveNewProject, setverticalPaneSize, setAskLongURL }) => {



            const [longurlValueTempoary, setLongurlValueTempoary] = useState("");


      //    Handle LongURL-Value inside of Inputfield
            const HandleLongURL_Change = e => {
                setLongurlValue(e.target.value)
            }

      //   open NewProject-Area
            const NewProject_Show =  () => {
                sliderSplitPane.closeSlide(setverticalPaneSize);
                setAskLongURL(true);
                setLongurlValueTempoary(longurlValue)
                setLongurlValue('')
            }

      //   close NewProject-Area
            const NewProject_Hide = () => {
                  sliderSplitPane.openSlide(setverticalPaneSize);
                  setAskLongURL(false);
                  setLongurlValue(longurlValueTempoary) // back to old value
            }

      //   Save the NewProject
           const NewProject_Save = async (saveNewProject) => {
               const UrlCheck = validateURL(longurlValue) ;
               if (UrlCheck) {
                saveNewProject();
                NewProject_Hide();
               }
               else {
                 alert('I assume you did not type in a valid Website-Adress?')
               }
            }



      //   URL Validation
        const validateURL = (str) => {
          var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
            '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
          return !!pattern.test(str);
        }



 return (

  <div className={styles.longURLButtons + ` longURLButtons  `}>
   <span className={` button-group `}>


 {/* Button to create new Project */}
     <button className={styles.button} onClick={() => { manageProjects.newProject_Show(sliderSplitPane, setverticalPaneSize, setAskLongURL, setLongurlValueTempoary, longurlValue, setLongurlValue    ); }} >
     New Project</button>

 {/* Button to forward result to friend*/}
     <button className={styles.button + ' toggleOnlongURLValue ' } onClick={() => {alert('This is still work in Progress. Nothing happens here: As of yet! ')   }} >
     Forward Result to a friend</button>
 {/* Button to request the proxied result*/}
     <button className={styles.button + ' toggleOnlongURLValue ' } onClick={() => {surflyProxy.surflyRender(projectId, setpaneValues);   }} >
     Look at Result</button>

{/* Button to save work */}
     {(provideProjName)  ? '' :
     <button className={styles.button + ' toggleOnlongURLValue ' }  onClick={() => {  save();  } } >
     {saving ? "Saving..." : "Save"} </button>
     }
   </span>

    <input  type="url"  value={longurlValue} className={` longURLInput form-control form-input `}
    style={{ display: "none" }} placeholder="enter any valid Internet-Website-Adress here (or look at examples)"
    onChange={HandleLongURL_Change}
    onKeyUp={() => { HandleReturnkey(event,'NewProject')} }
    >
    </input>
    <span className={` newProjectButtons `} style={{ display: "none" }}>
       <button onClick={() => { NewProject_Save(saveNewProject); }} className={styles.button + ' isVisible_TheCreateNewProjectField'}  >
       create new project
       </button>
       <BsX onClick={() => {NewProject_Hide(); }} className="bootstrapButton" style={{ color: "white", fontSize: 36 }} />
    </span>
     <p className={` slogan  `} style={{ display: "none" }}>
     {/*You can */}Change any static Website!</p>

   </div>
 )
}

     export default ManageProject