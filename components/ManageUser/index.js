import React                  from "react";
import { useRouter }          from "next/router";
import styles                 from "../../pages/index.module.css";
import { BsTrash, BsPencil }  from "react-icons/bs";
import db_communication       from "../../utils/mongo_communication";

const ManageUser = ({
        provideProjName,
        projectName,
        setProvideProjName,
        userData,
        projectId,
        projectQuery,
        setProjectName,
        setLongurlValue,
        setCssValue,
        setJsValue,
        setprojectId,
        userID_from_Fingerprint,
        setSaving,
        visitorId,
        jsValue,
        cssValue,
        setUserID_from_Fingerprint,
        longurlValue,
        FingerprintJS,
        setUserData,
        setpaneValues
    }) => {

      const router = useRouter();

   // ENV Vars in DEV and Production
      const serverURL = process.env.NEXT_PUBLIC_PRODURL;

      const data4project  = `${serverURL}/api/projectData/${projectQuery}` ;

      //   Delete from MongoDB
       const onDelete =  async ( data4project,  setProjectName,setLongurlValue,setCssValue,setJsValue,setprojectId, setpaneValues ) => {
          const requestOptions = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          };

          const response = await fetch(data4project, requestOptions);
          const { success } = await response.json();
          if (success) {
              router.push("/");
              setProjectName('')
              setLongurlValue('')
              setCssValue('');
              setJsValue('');
              setprojectId('');
              db_communication.getProjectListForUser(FingerprintJS, setUserID_from_Fingerprint, setUserData, serverURL, visitorId);
              setpaneValues("startpage.html");
          }
       }

        // console.log('test: ', `${styles.trashIconIsVisible}`);

   const trashIconIsVisible = {
      display: "inline-block"
    };


        // make sure no foreign project can be deleted ==> Thus: Only display the Delete-Icon if the projectId really belongs to that user-portfolio
        const ShowTrashIconIfOwner = (userData, projectId, trashIconIsVisible ) => {
                        let result;
                          userData.map((item, i) => {
                           if (item._id === projectId) {
                              result =   trashIconIsVisible
                           } })
                        return result
        }
      //   ProjectName Input Field
        const HandleProjectNameChange = e => {
            setProjectName(e.target.value)
        }

      //   DropDown-Element Eventhandler  (onClick for Option-Elements)
        const   ProjectList4User_DropDown = (event, setprojectId, userID_from_Fingerprint) => {
          if (event.target.value != "") { // console.log('dropdown was clicked => refresh Params in Query:  ',event.target.value,  userID_from_Fingerprint);
             router.push(`?projectQuery=${event.target.value}&userQuery=${userID_from_Fingerprint}`);
             setprojectId(event.target.value);
          }
        }

      //    ReturnKey for  input field:
        const HandleReturnkey = (e, howToSave) => {
          if (e.key === "Enter") {
                 db_communication.save(data4project, setSaving, visitorId, userID_from_Fingerprint, projectQuery, projectName, setProvideProjName, jsValue, setJsValue, cssValue, longurlValue, router, setUserID_from_Fingerprint);
                 db_communication.getProjectListForUser(FingerprintJS, setUserID_from_Fingerprint, setUserData, serverURL, visitorId)
          }
        }

    return (
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
                      onClick={() => {
                        db_communication.save(data4project, setSaving, visitorId, userID_from_Fingerprint, projectQuery, projectName, setProvideProjName, jsValue, setJsValue, cssValue, longurlValue, router, setUserID_from_Fingerprint);
                        db_communication.getProjectListForUser(FingerprintJS, setUserID_from_Fingerprint, setUserData, serverURL, visitorId);
                        } } >Save
                  </button>
                </>

                {!provideProjName && (
                  <BsPencil
                      style={{ color: "white", fontSize: 36, width: '.6em', minWidth: '.6em'  }}
                      onClick={() => { setProvideProjName(true) } }
                      className=' toggleOnlongURLValue '
                      alt="Edit the Name for this Project"
                      title="Edit the Name for this Project"
                  />

  )}

                {!provideProjName  && userData && userData.length > 0 &&  (
                    <BsTrash
                      className={`${styles.trashIcon} toggleOnlongURLValue`}
                      style={ShowTrashIconIfOwner(userData, projectId, trashIconIsVisible)}
                      onClick={() => {
                          if (window.confirm('\n\nDo you really wish to delete this Project? \n\nThe deleted project can never be restored again.\n\nAre you sure you want to confirm?\n\n  ')) {
                                    onDelete( data4project, setProjectName, setLongurlValue, setCssValue, setJsValue, setprojectId, setpaneValues ) } }}
                      alt="Delete this Project"
                      title="Delete this Project"
                     />
                  )
                }

                {userData && userData.length > 0 && (
                  <select
                    className="projectName-DropdownField  form-control form-input"
                    style={{ width: 240 }}
                    value={projectId && projectId }
                    onChange={(event) => { ProjectList4User_DropDown( event, setprojectId, userID_from_Fingerprint) }}
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
    );
};

export default ManageUser;