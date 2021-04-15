import styles from "../../pages/index.module.css";
import {BsInfoCircle}    from "react-icons/bs";

const ShowProjName = ({ longurlValue, projectName  }) => {
    return (
      <div className={styles.customURL + ` customURL   `}>
         {longurlValue &&
         	<span>Name: {projectName && projectName }
		       <BsInfoCircle
		         className="bootstrapButton"
		         style={{ color: "white", fontSize: 22, margin: '-2px 0 0 .3em' }} />
           		&nbsp;
           		<span>you are editing on:&nbsp;
           			<a href={longurlValue} target="_blank">{longurlValue}</a>
           		</span>
           	</span>
           }
      </div>
    );
};
export default ShowProjName;