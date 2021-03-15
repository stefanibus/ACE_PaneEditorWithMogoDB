

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SplitPane from "react-split-pane";


import { CssEditor, HtmlEditor, JavascriptEditor } from "../components/Editors";
import { useDebounce } from "../utils/useDebounce";

import styles from "./index.module.css";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

import { BsTrash } from "react-icons/bs";

const Index = () => {
  const [heightValue, setHeightValue] = useState("485px");
  const [askLongURL, setAskLongURL] = useState(false);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [htmlValue, setHtmlValue] = useState("");
  const [jsValue, setJsValue] = useState("");
  const [cssValue, setCssValue] = useState("");
  const [longurlValue, setLongurlValue] = useState("https://www.medienwerft.de/karriere/offene-stellen/entwicklung/praktikum-frontend/")
  const [shorturlValue, setLShorturlValue] = useState(" ")
  const [paneValues, setpaneValues] = useState("");
  const [userID, setUserID] = useState("");
  const [project, setProject] = useState([]);
  const [projectID, setProjectID] = useState("");
  const [projectName, setProjectName] = useState("")

  const debouncedHtml = useDebounce(htmlValue, 1000);
  const debouncedJs = useDebounce(jsValue, 1000);
  const debouncedCss = useDebounce(cssValue, 1000);

  const router = useRouter();
  const [visitorID, setVisitorID] = useState("");
  const { id, user_id } = router.query;

  function onChange(event) {
    if (event.target.value != "") {
      router.push(`?id=${event.target.value}&user_id=${userID}`);
      setProjectID(event.target.value);
    } else {
      location.href = "/";
      setProjectID("");
    }
  }

  async function onDelete(id) {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(`../api/pens/${id}`, requestOptions);
    const { success, data } = await response.json();
    if (success) {
      location.href = "/";
      setProjectID("");
    }
  }

  async function getProjects() {
    const fp = await FingerprintJS.load();
    // FingerprintJS agent is ready: Get a visitor identifier when you'd like to.
    const result = await fp.get();

    // This is the visitor identifier:
    const visitorId = result.visitorId;
    setUserID(visitorId);
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(`../api/users/${visitorId}`, requestOptions);
    const { data } = await response.json();
    setProject(data);
  }

  // API PENS
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`../api/pens/${id}`);
      const { data } = await response.json();
      if (response.status !== 200) {
        await router.push("/404");
      }
      setProjectName(data.projectName)
      setHtmlValue(data.html);
      setCssValue(data.css);
      setJsValue(data.js);
      setProjectID(id);
      setLoading(false);
    }

    if (id) {
      setLoading(true);
      fetchData();
    } else {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (router.query) {
      setVisitorID(router.query.user_id);
    }
  }, [user_id]);



  useEffect( () => {
    const paneOutput = `<html>
                    <style>
                    ${debouncedCss}
                    </style>
                    <body>
                    ${debouncedHtml}
                    <script type="text/javascript">
                    ${debouncedJs}
                    </script>
                    </body>
                  </html>`;
    setpaneValues(paneOutput);

    getProjects();
  }, [debouncedHtml, debouncedCss, debouncedJs]);

  const save = async () => {
    setAskLongURL(false);
    setSaving(true);
    var meth = "PUT";
    if (visitorID) {
      if (visitorID == userID) {
        meth = !id ? "PUT" : "POST";
      } else {
        meth = "PUT";
      }
    } else {
      meth = "PUT";
    }
    if (projectName == " ") {
      alert("Please input project name");
      setSaving(false);
      setAskLongURL(true);
      return false;
    }


    const requestOptions = {
      method: meth,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        html: htmlValue,
        css: cssValue,
        js: jsValue,
        id: id,
        userID: userID,
        projectName: projectName
      }),
    };
    const response = await fetch(`../api/pens/${id}`, requestOptions);
    const {
      data: { updatedRecord, newRecordId },
    } = await response.json();

    setSaving(false);
    if (!updatedRecord) {
      await router.push(`?id=${newRecordId}&user_id=${userID}`);
    }
    getProjects();
  };

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }





(function (s, u, r, f, l, y) {
  s[f] = s[f] || {
    init: function () {
      s[f].q = arguments;
    }
  };
  l = u.createElement(r);
  y = u.getElementsByTagName(r)[0];
  l.async = 1;
  l.src = "https://surfly.com/surfly.js";
  y.parentNode.insertBefore(l, y);
})(window, document, "script", "Surfly");




    // SURFLY Save =   UNEXPECTED CORS ISSUE
    const  surflyRender = (projectID) => {
        async function fetchData() {
              var timestamp = Date.now();

              console.log(  'projectID: ',projectID);
                const surflyFetch = "https://guarded-anchorage-85319.herokuapp.com/api/surfly/"+projectID+"/?timestamp="+timestamp;
             // const surflyFetch = {"SurflyResponseURL":"https://surfly.com/m10V7gkLlF6US8CVlcCSLl0fWQ"}

              console.log('surflyFetch new: ', surflyFetch);
              console.log('surflyFetch.SurflyResponseURL TEST ', surflyFetch.SurflyResponseURL);
              const finalTest = surflyFetch.SurflyResponseURL ;
              console.log('finalTest: ', finalTest)

          const requestOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json; charset=utf-8" },
          };
          const response = await fetch(finalTest, requestOptions);
          const { yesThis } = await response.json();
          console.log('SurflyResponseURL: ', yesThis);
          //
           setpaneValues(yesThis);
          if (response.status !== 200) {
            await router.push("/404");
          }
        }
        fetchData()
    }



              // pass  "domainpath"  new:
              // https://www.smazy.me/surfly_switch.js?timestamp=timestamp
              // http://localhost:3000/api/surfly/604a14869e030b0015714a6f
              // https://guarded-anchorage-85319.herokuapp.com/api/surfly/604a14869e030b0015714a6f
              // https://guarded-anchorage-85319.herokuapp.com/api/surfly/${projectID}/?timestamp=`+timestamp,
              // http://localhost:3000/api/surfly/projectData/604ccd50176c15486851f14b



// pass 2 Values
  const RefreshTest = (projectID, longurlValue) => {

            // loading of params additinally collapses,  will go back to hardCoding the URLS for better debugging
            // https://guarded-anchorage-85319.herokuapp.com/api/surfly/projectData/${projectID}/?timestamp=`+timestamp

            console.log(  'projectID       YES   ',projectID);
            console.log(  'longurlValue  YES   ',longurlValue);
            const surflyFetchURL = 'https://surfly.com/v2/sessions/?api_key=394ef3e384e546aaaf820a225e097878';
            var timestamp = Date.now();
            console.log(' RefreshTest  started running! ' );
            const surflyInjection = `https://guarded-anchorage-85319.herokuapp.com/api/surfly/projectData/${projectID}?timestamp=`+timestamp;
            console.log(' surflyInjection: ', surflyInjection );

          fetch( surflyFetchURL,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json; charset=utf-8"
              },
              body: JSON.stringify({
                script_embedded: surflyInjection,
                ui_off: "true",
                url: longurlValue,
                splash: "false"
              })
            }
          )
            .then(function (response) {
              if (response.ok) {
                return response.json();
              } else {
                throw new Error("Could not reach the API: " + response.statusText);
              }
            })
            .then(function (response) {
                console.log("response.leader_link: ", response.leader_link)
                setpaneValues(response.leader_link);
            })
            .catch(function (error) {
                console.log('error: ');
                console.log(error.message);
            });
        }






const ariaTest = () => {

       var timestamp = Date.now();
       fetch('https://surfly.com/v2/sessions/?api_key=394ef3e384e546aaaf820a225e097878', {
             method: "POST",
             headers: {
                 "Content-Type": "application/json; charset=utf-8"
             },
             body: JSON.stringify({
                 script_embedded: 'https://guarded-anchorage-85319.herokuapp.com/api/surfly/projectData/604ccd50176c15486851f14b/?time='+timestamp,
                 ui_off: "true",
                 url: 'https://www.medienwerft.de/karriere/offene-stellen/entwicklung/praktikum-frontend/',
                 splash: "false"
             })
         })
         .then(function(response) {
             if (response.ok) {
                 return response.json();
             } else {
                 throw new Error("Could not reach the API: " + response.statusText);
             }
         })
         .then(function(response) {
             // console.log('response', response)
               console.log('response.leader_link', response.leader_link)
               setpaneValues(response.leader_link);

         })
         .catch(function(error) {
             console.log('error: ');
             console.log(error.message);
         });
}




    // controlled States = this is also still unfinished business
    const HandleProjectNameChange = (e) => {
        console.log('HandleProjectNameChange TEST ')
        setProjectName(e.target.value)
    }
    const HandleLongURL_Change = (e) => {
        console.log('HandleLongURL_Change TEST ' )
        // let longurlNewValue = ...longurlValue , e.target.value;
        setLongurlValue(e.target.value)
    }





      // console.log(  'heightValue', heightValue);
      // console.log(  'loading', loading);
      // console.log(  'saving', saving);
      // console.log(  'htmlValue', htmlValue);
      // console.log(  'paneValues', paneValues);
      // console.log(  'userID', userID);
      // console.log(  'project', project);
      // console.log(  'projectID', projectID);
      // console.log(  'projectName', projectName);
      // console.log(  'longurlValue', longurlValue);



  return (
    <>
      <div className={styles.header}>
        <div>
           <button
            className={styles.button}
            onClick={() => {
               ariaTest();
            }}
          >
            StaticClient
          </button>
           <button
            className={styles.button}
            onClick={() => {
               surflyRender(projectID);
            }}
          >
            ServersideSurfly
          </button>
        <button
        className={styles.button}
        onClick={() => {
          RefreshTest(projectID, longurlValue);
        }}
        >
        2 param-Values
        </button>

          <button
            className={styles.button}
            onClick={() => {
              setProjectID("");
              setAskLongURL(true);
              // location.href = "/";
            }}
          >
            New Project / Website (under construction)
          </button>
          <button className={styles.button} onClick={save}>
            {saving ? "Saving..." : "Save (currently Panes only)"}
          </button>
          <input
            className={`${askLongURL ? 'enterLongURLisActive' : '' }  form-control form-input`}
            value={longurlValue}
            style={{ display: "none" }}
            placeholder="Pls. enter any valid Internet-Website-Adress here"
            //onChange={(e) => { setLongurlValue(e.target.value) }}
            onChange={(e) => {HandleLongURL_Change(e)}}
            >
          </input>
        </div>
        <div className="custom-select">
          <input
            className="form-control form-input"
            value={projectName}
            placeholder="Project name"
            onChange={(e) => {HandleProjectNameChange(e)}}
            >
           </input>
          {project && project.length > 0 && (
            <select
              className="form-control form-input"
              style={{ width: 240 }}
              value={projectID ? projectID : ""}
              onChange={onChange}
            >
              <option value="">ProjectID</option>
              {project.map((item, i) => {
                return (
                  <option key={i} value={item._id}>
                    {item._id}
                  </option>
                );
              })}
            </select>
          )}

          {project && project.length > 0 && <BsTrash style={{ color: "white", fontSize: 36 }} onClick={() => onDelete(projectID)}/>}
        </div>
      </div>
      <SplitPane
        style={{ marginTop: "60px" }}
        split="horizontal"
        className={askLongURL ? 'enterLongURLisActive' : '' }
        minSize={"50%"}
        onDragFinished={(height) => {
          setHeightValue(`${height - 40}px`);
        }}
      >
        <SplitPane split="vertical" minSize={"33%"}>
          <HtmlEditor
            height={heightValue}
            value={htmlValue}
            onChange={setHtmlValue}
          />
          <SplitPane split="vertical" minSize={"50%"}>
            <CssEditor
              height={heightValue}
              value={cssValue}
              onChange={setCssValue}
            />
            <JavascriptEditor
              height={heightValue}
              value={jsValue}
              onChange={setJsValue}
            />
          </SplitPane>
        </SplitPane>
          <iframe key={paneValues} src={paneValues}  className={styles.previewIframe} ></iframe>
      </SplitPane>
    </>
  );
};

export default Index;
