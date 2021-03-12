import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SplitPane from "react-split-pane";

// import StartSurfly from "../utils/surfly";


import { CssEditor, HtmlEditor, JavascriptEditor } from "../components/Editors";
import { useDebounce } from "../utils/useDebounce";

import styles from "./index.module.css";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

import { BsTrash } from "react-icons/bs";

const Index = () => {
  const [heightValue, setHeightValue] = useState("485px");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [htmlValue, setHtmlValue] = useState("");
  const [jsValue, setJsValue] = useState("");
  const [cssValue, setCssValue] = useState("");
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

    // The FingerprintJS agent is ready.
    // Get a visitor identifier when you'd like to.
    const result = await fp.get();

    // This is the visitor identifier:
    const visitorId = result.visitorId;
    setUserID(visitorId);
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    // const response = await fetch(`../api/users/${visitorId}`, requestOptions);
    const response = await fetch(`../api/users/${visitorId}`, requestOptions);
    const { data } = await response.json();
    setProject(data);
  }


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
    // console.log('css js html changed AND paneOutput is SET with paneOutput beeing ')
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
    if (projectName == "") {
      alert("Please input project name");
      setSaving(false);
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



// const SurflyTest = (number) => {
//   console.log("alte Methode = surfly.js and number: " + number)
//   StartSurfly.start(number);
//   console.log("neue Methode sollte nun durch sein.")
// }

































































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

var timestamp = Date.now();

var url_string = window.location.href;
var url = new URL(url_string);
var domainpath = url.searchParams.get("domain");
//  console.log("grab the domainpath from Window.location: ", domainpath, );

//  console.log('Refresh API Request TEST: ' );


const RefreshTest = (domainpath) => {
    console.log(' RefreshTest  started running! ' );

  fetch(
    "https://surfly.com/v2/sessions/?api_key=394ef3e384e546aaaf820a225e097878",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      // pass  "domainpath"  new:
      // https://www.smazy.me/surfly_switch.js?timestamp=timestamp
      // http://localhost:3000/api/surfly/604a14869e030b0015714a6f
      // https://guarded-anchorage-85319.herokuapp.com/api/surfly/604a14869e030b0015714a6f
      // ?timestamp=timestamp
      body: JSON.stringify({
        script_embedded:
          "https://guarded-anchorage-85319.herokuapp.com/api/surfly/604a14869e030b0015714a6f",
        ui_off: "true",
        url: domainpath,
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

// window.addEventListener("DOMContentLoaded", function () {
//   // https://appelsiini.net/2017/accessing-api-with-javascript/   // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

//   });

// RefreshTest(domainpath)



























  return (
    <>
      <div className={styles.header}>
        <div>
           <button
            className={styles.button}
            onClick={() => {
              RefreshTest("https://www.medienwerft.de/karriere/offene-stellen/entwicklung/praktikum-frontend/");
            }}
          >
            Surfly Internal Test
          </button>}
{/*           <button
            className={styles.button}
            onClick={() => {
              SurflyTest(5);
            }}
          >
            Surfly External Test
          </button> */}
          <button
            className={styles.button}
            onClick={() => {
              setProjectID("");
              location.href = "/";
            }}
          >
            New
          </button>
          <button className={styles.button} onClick={save}>
            {saving ? "Saving..." : "Save"}
          </button>

        </div>
        <div className="custom-select">
          <input className="form-control form-input" value={projectName} placeholder="Project name" onChange={(e) => { setProjectName(e.target.value) }}></input>
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
          {/*  THIS WILL BE OUR JS and CSS from Mogno (and more)
          <iframe src="https://guarded-anchorage-85319.herokuapp.com/api/surfly/604a14869e030b0015714a6f" className={styles.previewIframe} />
          */}
          <iframe key={paneValues} src={paneValues}  className={styles.previewIframe} ></iframe>
          {/*<iframe srcDoc={paneValues}  id="showUrl_Result"  name="showUrl_Result"  className={styles.previewIframe} />*/}
        {/*<iframe srcDoc={paneValues} className={styles.previewIframe} />*/}
      </SplitPane>
    </>
  );
};

export default Index;
