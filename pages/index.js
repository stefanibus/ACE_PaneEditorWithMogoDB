

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SplitPane from "react-split-pane";


import { CssEditor, HtmlEditor, JavascriptEditor } from "../components/Editors";
import { useDebounce } from "../utils/useDebounce";

import styles from "./index.module.css";

import FingerprintJS from "@fingerprintjs/fingerprintjs";

import { BsTrash, BsPlay, BsX,  } from "react-icons/bs";

const Index = () => {
  const [heightValue, setHeightValue] = useState("485px");
  const [askLongURL, setAskLongURL] = useState(false);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [htmlValue, setHtmlValue] = useState("");
  const [jsValue, setJsValue] = useState("");
  const [cssValue, setCssValue] = useState("");
  const [longurlValue, setLongurlValue] = useState("")
  const [shorturlValue, setLShorturlValue] = useState(" ")
  const [paneValues, setpaneValues] = useState("startpage.html");
  const [userID, setUserID] = useState("");
  const [project, setProject] = useState([]);
  const [projectID, setProjectID] = useState("");
  const [projectName, setProjectName] = useState("")

  const debouncedHtml = useDebounce(htmlValue, 1000);
  const debouncedJs = useDebounce(jsValue, 1000);
  const debouncedCss = useDebounce(cssValue, 1000);

  const router = useRouter();
  const [visitorID, setVisitorID] = useState();
  const { id, user_id } = router.query;


// ENV Vars in DEV and Production
// we have 3 env variables: NODE_ENV  and  DEVURL and PRODURL , all in the .env File
// we are Exposing Environment Variables to the Browser = NEXT_PUBLIC_DEVURL  can be used as it is prefixed by NEXT_PUBLIC_
  const serverURL = process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_DEVURL : process.env.PRODURL;
  const pensAPI_url  = `${serverURL}/api/pens/${id}` ;  //   console.log('pensAPI_url from index.js: ',  pensAPI_url)
  const usersAPI_url = `${serverURL}/api/users/${id}`;  //   console.log('usersAPI_url from index.js: ', usersAPI_url)


  function ChangeProjectViewForUser(event) {
    // console.log('  Dropdown changed: ',event.target.value,  userID);
    if (event.target.value != "") {
      // console.log('userID ', userID)
      // console.log('event.target.value ', event.target.value )
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
    const response = await fetch(pensAPI_url, requestOptions);
    const { success, data } = await response.json();
    if (success) {
      location.href = "/";
      setProjectID("");
    }
  }


  const NewProject_Start =  () => {  // console.log('toggle visibility ');
      setAskLongURL(true);
  };
 const NewProject_onClose = () => {  // console.log('toggle visibility ');
      setAskLongURL(false);
  }

 const NewProject_onStart = async () => { // console.log(' start new project ');
      setAskLongURL(false);
      setProjectID("");
      await router.push(``);  // location.href = "/";
      save()
  }

 const underConstruction = () => {
      alert('this is still unfinished work:  under construction ' )
  }



// getProjects  = get all  data for all projects for this specific user only
  async function getProjects() {
    const fp = await FingerprintJS.load();
    const result = await fp.get();

    // This is the visitor identifier:
    const visitorIentification = result.visitorId;
    setUserID(visitorIentification);
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    console.log('IN FUNCTION SCOPE =  usersAPI_url from index.js: ', usersAPI_url)
    const response = await fetch(usersAPI_url, requestOptions);
    const { data } = await response.json();
    setProject(data);
  }

  // API PENS
  useEffect(() => {
    // console.log("api Pens  ")
    async function fetchData() {

      const response = await fetch(pensAPI_url);
      const { data } = await response.json();
      if (response.status !== 200) {
        alert("there is no page for this ProjectID");
        await router.push("/404");  //  create specific 404 for this case
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
    // setpaneValues(paneOutput);

    getProjects();
  }, [debouncedHtml, debouncedCss, debouncedJs]);







  const save = async () => {
    setAskLongURL(false);
    setSaving(true);
    var meth = "PUT";
    if (visitorID) {
      if (visitorID == userID) { // console.log('EQUAL userID YES =  visitor == user: ', userID);
        meth = !id ? "PUT" : "POST";
      } else {
       // console.log("same Project, but different User");
        alert("We cloned this Project for you. You can name your own Project in the Project-Name Field! ");
        setUserID(visitorID)
        meth = "PUT";
      }
    } else {
     // console.log("new Project");
      setUserID(visitorID);
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
    const response = await fetch(pensAPI_url, requestOptions);
    const {
      data: { updatedRecord, newRecordId },
    } = await response.json();

    setSaving(false);
    if (!updatedRecord) {     //   console.log('userID in save-function in !updatedRecord: ', userID,  updatedRecord)
      await router.push(`?id=${newRecordId}&user_id=${userID}`);
    }
    getProjects();
  };

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }



// Surfly Libary cannot be loaded inside of app.js like so:       <script>!function(e,t,n,r,s,c){e[r]=e[r]||{init:function(){e[r].q=arguments}},s=t.createElement(n),c=t.getElementsByTagName(n)[0],s.async=1,s.src="https://surfly.com/surfly.js",c.parentNode.insertBefore(s,c)}(window,document,"script","Surfly");</script>

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









    // SURFLY Save => CORS-ISSUE on Localhost
    const  surflyRender = async (projectID) => {
              var timestamp = Date.now();
              if (projectID == "" || projectID == " " ) {
                  alert('Please create a project before you click on SAVE (or work already existing projects) ');
              } else {
                  const SurflyAPIstring = `${serverURL}/api/surfly/${projectID}/?timestamp=`+timestamp;
                  // console.log('SurflyAPIstring with projectID and TimeStamp: ',SurflyAPIstring);
                  const fetchRequestOptions = { method: "GET", headers: { "Content-Type": "application/json; charset=utf-8" } };
                  const getSurflyURL = await fetch(SurflyAPIstring, fetchRequestOptions);
                  const { SurflyResponseURL } = await getSurflyURL.json();
                  if (getSurflyURL.status !== 200) { await router.push("/404"); }
                  setpaneValues(SurflyResponseURL);
              }
        }



    // controlled States = this is also still unfinished business
    const HandleProjectNameChange = (e) => {
       // console.log('HandleProjectNameChange TEST ')
        setProjectName(e.target.value)
    }
    const HandleLongURL_Change = (e) => {
       // console.log('HandleLongURL_Change TEST ' )
        // let longurlNewValue = ...longurlValue , e.target.value;
        setLongurlValue(e.target.value)
    }


// console.log('userID:  ', userID)
// console.log('paneValues:  ', paneValues)

  return (
    <>
      <div className={styles.header}>
        <div>
         <span className={`button-group   ${askLongURL ? 'enterLongURLisActive' : '' } `}>
           <button
            className={styles.button}
            onClick={() => {
               underConstruction();
            }}
          >
            Send Result to friend
          </button>
           <button
            className={styles.button}
            onClick={() => {
               surflyRender(projectID);
               underConstruction();
            }}
          >
            Look at Result
          </button>
          <button
            className={styles.button}
            onClick={() => {
              NewProject_Start();
            }}
          >
            New Project / change any Website
          </button>
          <button className={styles.button}  onClick={() => {  save(); underConstruction();} } >
            {saving ? "Saving..." : "Save"}
          </button>
         </span>
          <input
            value={longurlValue}
            className={`longURLInput  ${askLongURL ? 'enterLongURLisActive' : '' }  form-control form-input`}
            style={{ display: "none" }}
            placeholder="enter any valid Internet-Website-Adress here (or look at examples)"
            //onChange={(e) => { setLongurlValue(e.target.value) }}
            onChange={(e) => {
              HandleLongURL_Change(e);
               }}
            >
          </input>
          <span className={`longURLButtons ${askLongURL ? 'enterLongURLisActive' : '' } `} style={{ display: "none" }}>
             <BsPlay style={{ color: "white", fontSize: 36 }} onClick={() => {  NewProject_onStart(); underConstruction();} }/>
             <BsX style={{ color: "white", fontSize: 36 }} onClick={() => NewProject_onClose()}/>
          </span>


        </div>
        <div className={`custom-select  ${askLongURL ? 'enterLongURLisActive' : '' } `}>
          <input
            className="projectName-InputField form-control form-input"
            value={projectName}
            placeholder="provide Project Name"
            onChange={(e) => {
              // setUserID(visitorID);
              HandleProjectNameChange(e)}}
            >
           </input>

          {project && project.length > 0 && <BsTrash style={{ color: "white", fontSize: 36 }} onClick={() => onDelete(projectID)}/>}

          {project && project.length > 0 && (
            <select
              className="projectName-DropdownField  form-control form-input"
              style={{ width: 240 }}
              value={projectID ? projectID : ""}
              onChange={ChangeProjectViewForUser}
            >
              <option value="">all your projects: </option>
              {project.map((item, i) => {
                return (
                  <option key={i} value={item._id}>
                    {item.projectName ? item.projectName : 'needs_a_name '}
                  </option>
                );
              })}
            </select>
          )}

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
          <iframe key={paneValues}       src={paneValues}     id="resultFrame"       name="resultFrame"       className={styles.previewIframe} ></iframe>
      </SplitPane>
    </>
  );
};

export default Index;
