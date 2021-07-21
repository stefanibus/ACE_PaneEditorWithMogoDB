// request this page like this: ==>  https://domainname.com/short?projectQuery=6093ad076b9cac002d946b15
import React, { useState, useEffect } from "react";
import { useRouter }     from "next/router";
import Head              from "next/head";
import surflyProxy       from "../../utils/surflyLibary";
import styles            from "../index.module.css";

const Short = () => {

  const router = useRouter();
  const { projectQuery, userQuery } = router.query;
  const [loading, setLoading] = useState(true);
  const [noProject, setNoProject] = useState(false);
  const [paneValues, setpaneValues] = useState("startpage.html");


  const data4project  = `${process.env.NEXT_PUBLIC_PRODURL}/api/projectData/${projectQuery}`


  useEffect(() => {
      // load Surfly.com API Proxy
      //
      surflyProxy.embedLibary()

     if(router.isReady) {
            if(typeof projectQuery !== "undefined")  {
                 const fetchProjectData = async () => {
                  const response = await fetch(data4project);
                  const { data } = await response.json();
                        if (response.status !== 200) {  //console.log("This projectQuery no longer exists or some other error has occurred:  ", projectQuery);
                          setNoProject(true);
                        } else
                        { // surfly will load the proxied Page ==>  API-Call to receive the URL for the Iframe
                          surflyProxy.surflyRender(projectQuery, setpaneValues, setLoading);
                        }
                  }
                  fetchProjectData();
            }
            else {  // console.log('The ProjectData is not yet available: ', projectQuery)
            }
     }
  }, [projectQuery]);

return(
  <>
      <Head>
        <title>Short-URL - Smazy</title>
                 <script type="text/jsx">
                    const imgTracking = document.createElement('img');
                    imgTracking.setAttribute('style', 'display:none');
                    imgTracking.src = 'https://www.make-mobile.de/webportal/assets/php/2019_together.php?viewport='+window.innerWidth+'+'+window.innerHeight+'query='+window.location.href ;
                    document.body.insertBefore(imgTracking, document.body.firstChild);
                </script>
      </Head>

      <div className={ loading ?  ` ${styles.trans}  ${styles.loading}` :  `  ${styles.trans}  ${styles.disNone}  ${styles.loading}`  } >

           {noProject ?
               <>
                 <div>
                     The Project you are asking for <br/>
                     was probably deleted.
                   {/*This project no longer exists or some other error has occurred. */}
                     <br/><br/>
                     To manipulate any other static webpage, please visit our startpage:<br/><br/>
                          <button
                           className={styles.button}
                           onClick={() => {router.push("/"); }} >
                           Go to Smazy Startpage
                         </button>
                  </div>
                </>
               :
               <span><span>Heroku-Server will boot /  Loading</span></span>
           }
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