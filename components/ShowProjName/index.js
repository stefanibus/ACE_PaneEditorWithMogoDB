import styles from "../../pages/index.module.css";

const ShowProjName = ({ longurlValue, projectName  }) => {
    return (
      <div className={styles.customURL + ` customURL   `}>
         {longurlValue && <span> {projectName && projectName }   &nbsp; <span> {longurlValue}</span></span> }
      </div>
    );
};
export default ShowProjName;