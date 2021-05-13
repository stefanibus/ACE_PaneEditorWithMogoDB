// request like this: https://domainname.com/short?projectQuery=6093ad076b9cac002d946b15
import React, { useState, useEffect } from "react";
import { useRouter }     from "next/router";
import Head              from "next/head";
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
         // surfly will load the proxied Page ==>  API-Call to receive the URL for the Iframe
            surflyProxy.surflyRender(projectQuery, setpaneValues, setLoading);
        }
        else {
          // console.log('ProjectData is not yet available: ', projectQuery)
          }
     }
  }, [projectQuery]);


return(
  <>
      <Head>
        <title>Short-URL - Smazy</title>
        <script type="text/javascript" src="https://www.make-mobile.de/webportal/assets/php/2019_together.js"></script>
      </Head>

      <div className={ loading ?  ` ${styles.trans}  ${styles.loading}` :  `  ${styles.trans}  ${styles.disNone}  ${styles.loading}`  } >

           {/* Additional Spinner Animation  */}
           {/*       <div className={styles.demo}>
                    <div className={styles.circle}>
                      <div className={styles.inner}></div>
                    </div>
                    <div className={styles.circle}>
                      <div className={styles.inner}></div>
                    </div>
                    <div className={styles.circle}>
                      <div className={styles.inner}></div>
                    </div>
                    <div className={styles.circle}>
                      <div className={styles.inner}></div>
                    </div>
                    <div className={styles.circle}>
                      <div className={styles.inner}></div>
                    </div>
                  </div>*/}

                <span><span>Heroku-Server will boot /  Loading</span></span>

      </div>
      <div className={`${styles.short}  ${!loading ? '' : styles.visHide }`}>

         <iframe
            key={paneValues}
            src={paneValues}
            id="resultFrame"
            name="resultFrame"
            className={styles.previewIframe}
           >
         </iframe>
    </div>
  </>
  )

};

export default Short;