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
        setUserData
    }) => {

      const router = useRouter();

   // ENV Vars in DEV and Production
      const serverURL = process.env.NEXT_PUBLIC_PRODURL;
      console.log('ManageUser -> NEXT_PUBLIC_PRODURL:  ', process.env.NEXT_PUBLIC_PRODURL);

      const data4project  = `${serverURL}/api/projectData/${projectQuery}` ;

      //   Delete from MongoDB
       const onDelete =  async ( data4project,  setProjectName,setLongurlValue,setCssValue,setJsValue,setprojectId ) => {
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
              db_communication.getProjectListForUser(FingerprintJS, setUserID_from_Fingerprint, setUserData, serverURL)
          }
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
                 db_communication.save(data4project, setSaving, visitorId, userID_from_Fingerprint, projectQuery, projectName, setProvideProjName, jsValue, cssValue, longurlValue, router, setUserID_from_Fingerprint);
                 db_communication.getProjectListForUser(FingerprintJS, setUserID_from_Fingerprint, setUserData, serverURL)
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
                        db_communication.save(data4project, setSaving, visitorId, userID_from_Fingerprint, projectQuery, projectName, setProvideProjName, jsValue, cssValue, longurlValue, router, setUserID_from_Fingerprint);
                        } } >Save
                  </button>
                </>

                {!provideProjName &&
                  <BsPencil
                      style={{ color: "white", fontSize: 36 ,  width: '1.65em' }}
                      onClick={() => { setProvideProjName(true) } }
                      className=' toggleOnlongURLValue '
                      alt="Edit the Name for this Project"
                      title="Edit the Name for this Project"
                   /> }

                {userData && userData.length > 0 &&
                  <BsTrash
                      style={{ color: "white", fontSize: 36 ,  width: '1.65em' }}
                      onClick={() => {
                          if (window.confirm('\n\nDo you really wish to delete this Project? \n\nThe deleted project can never be restored again.\n\nAre you sure you want to confirm?\n\n  ')) {
                                    onDelete( data4project, setProjectName, setLongurlValue, setCssValue, setJsValue, setprojectId ) } }}
                      alt="Delete this Project"
                      title="Delete this Project"
                  />
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