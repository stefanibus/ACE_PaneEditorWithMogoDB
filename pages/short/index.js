import React, { useState, useEffect } from "react";
import { useRouter }     from "next/router";
import surflyProxy       from "../../utils/surflyLibary";
import styles            from "../index.module.css";

const Short = () => {

  const router = useRouter();
  const { projectQuery, userQuery } = router.query;
  const [loading, setLoading] = useState(true);
  const [paneValues, setpaneValues] = useState("startpage.html");


  useEffect(() => {

      surflyProxy.embedLibary() // load Surfly.com API Proxy

     if(router.isReady) {
        if(typeof projectQuery !== "undefined")  {

           const loadProxy = async () => {
        // surfly API-Call to receive the URL for the Iframe (to load the proxied Page)
           await surflyProxy.surflyRender(projectQuery, setpaneValues);
        // Increase time for the LOADING SPINNER (loading)
           await  new Promise((resolve) => {  setTimeout(() => resolve(), 5000);  });
           setLoading(false);
        }
        loadProxy();
        }
        else {
          // console.log('ProjectData is not yet available: ', projectQuery)
          }
     }
  }, [projectQuery]);


return(
  <>
      <div className={ loading ?  ` ${styles.trans}  ${styles.loading}` :  `  ${styles.trans}  ${styles.disNone}  ${styles.loading}`  } >Loading...</div>
      <div className={!loading ?  `                                   ` :  `  ${styles.visHide}`  } >

         <iframe
            key={paneValues}
            src={paneValues}
            id="resultFrame"
            name="resultFrame"
            className={styles.previewIframe}
            style={{ height: "99vh" }}
           >
         </iframe>
    </div>
  </>
  )

};

export default Short;