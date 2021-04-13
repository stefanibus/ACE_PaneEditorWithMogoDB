import React                  from "react";
import { useRouter }          from "next/router";
import styles                 from "../../pages/index.module.css";
import { BsTrash, BsPencil }  from "react-icons/bs";
// import manageProjects  from "../../utils/manageProjects";

const ManageUser = ({
        provideProjName,
        projectName,
        save,
        setProvideProjName,
        userData,
        projectId,
        projectQuery,
        setProjectName,
        setLongurlValue,
        setCssValue,
        setJsValue,
        setprojectId,
        getProjectListForUser,
        userID_from_Fingerprint
    }) => {

      // const serverURL = process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_DEVURL : process.env.PRODURL;
      // STEFANO : I duplicated the below Vars from index.js, look into this later, probably ENV related approach
      const serverURL = 'http://localhost:3000';
      const data4project  = `${serverURL}/api/projectData/${projectQuery}` ;

      const router = useRouter();

      //   Delete from MongoDB
       const onDelete =  async ( data4project,  setProjectName,setLongurlValue,setCssValue,setJsValue,setprojectId,getProjectListForUser ) => {
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
              setprojectId('');
              getProjectListForUser();
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
          } else {
             // console.log('option-item has no value, thus nothing shall happen ');
          }
        }


      //    ReturnKey for  input field:
        const HandleReturnkey = (e, howToSave) => {
                if (e.key === "Enter") {
                       save();
                       getProjectListForUser()
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
                                      if (window.confirm('You wish to delete this Project. Are you sure?')) { onDelete( data4project, setProjectName, setLongurlValue, setCssValue, setJsValue, setprojectId, getProjectListForUser ) }
                                  }
                          }
                  />
                }

                {userData && userData.length > 0 && (
                  <select
                    className="projectName-DropdownField  form-control form-input"
                    style={{ width: 240 }}
                    value={projectId && projectId }
                    onChange={(event) => {ProjectList4User_DropDown(event, setprojectId, userID_from_Fingerprint)}}
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
