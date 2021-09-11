// request this page like this: ==> https://guarded-anchorage-85319.herokuapp.com/?projectQuery=6098dcf82b8c30003dcfbacc&userQuery=755c708e646f00b3ded9b9ef42ba2c29
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import SplitPane from "react-split-pane";
import styles from "./index.module.css";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import sliderSplitPane from "../utils/splitpane";
import surflyProxy from "../utils/surflyLibary";
import db_communication from "../utils/mongo_communication";
import ManageProject from "../components/ManageProject";
import ManageUser from "../components/ManageUser";
import manageProjects from "../utils/manageProjects";
import ShowProjName from "../components/ShowProjName";
import { CssEditor, JavascriptEditor } from "../components/Editors";

const Index = () => {
  const router = useRouter();
  const { projectQuery, userQuery } = router.query;
  const [seeOnMobileDevice, setSeeOnMobileDevice] = useState(false);
  const [askLongURL, setAskLongURL] = useState(false);
  const [longurlValueTempoary, setLongurlValueTempoary] = useState("");
  const [saving, setSaving] = useState(false);
  const [userData, setUserData] = useState([]);
  const [projectId, setprojectId] = useState("");

  const [editorHeightValue, setEditorHeightValue] = useState("350px");
  const [verticalPaneSize, setverticalPaneSize] = useState(40);
  const [horizontalSize, setHorizontalSize] = useState(50);
  const [jsValue, setJsValue] = useState("");
  const [cssValue, setCssValue] = useState("");
  const [longurlValue, setLongurlValue] = useState("");
  // const [shorturlValue, setLShorturlValue] = useState("");
  const [paneValues, setpaneValues] = useState("startpage.html");
  const [loading, setLoading] = useState(true);
  const [noProject, setNoProject] = useState(false);
  const [provideProjName, setProvideProjName] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [currentlyDragged, setCurrentlyDragged] = useState(false);
  const [userID_from_Fingerprint, setUserID_from_Fingerprint] = useState("");
  const [visitorId, setvisitorId] = useState();
  const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 1, height: 1 });

  // Tracking Pixel 
  useEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight,
      });
    }
  }, []);

  // Check for Startpage: if true -> drag the Horizontal-Pane-Handlebar to the very top
  useEffect(() => {
    const hasQuery = location.search == ""; //Equals true if we're at the root
    if (hasQuery) {
      // console.log('We are testing if this is the Startpage: The URL does NOT have a Query-String, thus this IS in fact the startpage. The answer is true. Thus we are going to drag the HorizontalPane to the top.', location.pathname, location.search);
      setverticalPaneSize(0);
    } else {
      // console.log('The URL does have a Query-String. Thus this is not the startpage. We will not change the position of the horizontal-Pane-Handlebar.', location.pathname, location.search);
    }
  }, [projectQuery]);

  const data4project = `${process.env.NEXT_PUBLIC_PRODURL}/api/projectData/${projectQuery}`;

  // load Surfly.com API Proxy
  useEffect(() => {
    surflyProxy.embedLibary();
  }, []);

  // fetchData from MongoDB
  useEffect(() => {
    if (router.isReady) {
      setvisitorId(router.query.userQuery); // store visitorId from router.query-Parameter
      // console.log('ProjectData is now certainly available: because router.isReady:' , router.isReady )
      if (typeof projectQuery !== "undefined") {
        const fetchProjectData = async () => {
          const response = await fetch(data4project);
          const { data } = await response.json();
          if (response.status !== 200) {
            setNoProject(true);
          } else {
            setProjectName(data.projectName);
            setLongurlValue(data.longurl);
            setCssValue(data.css);
            setJsValue(data.js);
            setprojectId(projectQuery);
            db_communication.getProjectListForUser(
              FingerprintJS,
              setUserID_from_Fingerprint,
              setUserData,
              process.env.NEXT_PUBLIC_PRODURL,
              router.query.userQuery
            );
            surflyProxy.surflyRender(projectQuery, setpaneValues, setLoading); // (re-)load the result-page if projectQuery changes
          }
        };
        fetchProjectData();
      } else {
        // console.log('ProjectData is not available: ', projectQuery)
        setLoading(false);
        db_communication.getProjectListForUser(
          FingerprintJS,
          setUserID_from_Fingerprint,
          setUserData,
          process.env.NEXT_PUBLIC_PRODURL,
          visitorId
        );
      }
    }
  }, [projectQuery]);

  const showResultOnMobileDevice = () => {
    setSeeOnMobileDevice(true);
  };

  // Tracking Pixel
  const trackingPixel = () => {
    if (dimensions.width > 1) {
      return (
        <img
          id="trackingPixel"
          src={`https://www.make-mobile.de/webportal/assets/php/2019_together.php?width_${dimensions.width}_height_${dimensions.height}_query=${window.location.href} `}
        />
      );
    } else {
      return "no data yet";
    }
  };

  // waiting for initial Response from MongoDB
  if (loading) {
    return (
      <>
        <Head>
          <title>Long-URL - Smazy</title>
        </Head>{" "}
        <div ref={targetRef}         className={
          loading
            ? ` ${styles.trans}  ${styles.loading}`
            : `  ${styles.trans}  ${styles.disNone}  ${styles.loading}`
        }>
          {noProject ? (
          <>
            <div>
              The Project you are asking for <br />
              was probably deleted.
              {/*This project no longer exists or some other error has occurred. */}
              <br />
              <br />
              To manipulate any other static webpage, please visit our
              startpage:
              <br />
              <br />
              <button
                className={styles.button}
                onClick={() => { 
                  manageProjects.newProject_Show(
                    sliderSplitPane,
                    setverticalPaneSize,
                    setAskLongURL,
                    setLongurlValueTempoary,
                    longurlValue,
                    setLongurlValue
                  ); 
                  router.push("/");
                }}
              >
                Go to Smazy Startpage
              </button>
            </div>
          </>
        ) : (
          <span>
            <span>Heroku-Server will boot / Loading</span>
          </span>
        )}



        </div>
      </>
    );
  }

  // display page after initial Response from MongoDB

  return (
    <>
      <Head>
        <title>{projectName} / Long-URL</title>
      </Head>
      <div
        ref={targetRef}
        className={`${styles.smartphone} ${
          seeOnMobileDevice ? styles.toggle_IframeIntoView : null
        } `}
      >
        <div>
          <h3>
            ## Smazy ##
            <br />
            ## _Manipulate any static website on the internet_ ##
          </h3>
          {projectName ? (
            <>
              <br />
              If you merely want to <strong>look</strong> <br />
              at the result of the following project:&nbsp;
              <br />
              <span className={styles.link} onClick={showResultOnMobileDevice}>
                {projectName}
              </span>
              ,<br />
              please click the above link.
              <br />
            </>
          ) : (
            <>
              <br />
              Demo:
              <br />
              <a
                className={styles.link}
                href="https://guarded-anchorage-85319.herokuapp.com/short?projectQuery=60fe83abd8d488002d4c3dec"
                target="_top"
              >
                Manipulate Google
              </a>
              <br />
              <br />
              You can manipulate
              <br />
              'all static webpages'
              <br />
              on the internet.&nbsp;
            </>
          )}
          <br />
          Currently, you are on a smartphone-device.
          <br />
          To actively create something with this manipulation-service,
          <br />
          please use a desktop-device.
        </div>
      </div>
      <div
        className={
          `
                ${styles.desktop} ${
            seeOnMobileDevice ? styles.toggle_IframeIntoView : null
          }  ` +
          `
                toggleView ` +
          `
                ${askLongURL && " isVisible_TheCreateNewProjectField "} ` +
          `
                ${!longurlValue && " isVisible_NoActiveProject "} `
        }
      >
        <div className={styles.header}>
          <ManageProject
            setLongurlValue={setLongurlValue}
            provideProjName={provideProjName}
            setProvideProjName={setProvideProjName}
            setpaneValues={setpaneValues}
            longurlValue={longurlValue}
            saving={saving}
            setSaving={setSaving}
            setverticalPaneSize={setverticalPaneSize}
            setAskLongURL={setAskLongURL}
            longurlValueTempoary={longurlValueTempoary}
            setLongurlValueTempoary={setLongurlValueTempoary}
            projectQuery={projectQuery}
            userID_from_Fingerprint={userID_from_Fingerprint}
            setUserID_from_Fingerprint={setUserID_from_Fingerprint}
            visitorId={visitorId}
            jsValue={jsValue}
            setJsValue={setJsValue}
            cssValue={cssValue}
            projectName={projectName}
            setLoading={setLoading}
          />

          {/*display the ProjectName and the LongURL */}
          {provideProjName ? (
            ""
          ) : (
            <ShowProjName
              longurlValue={longurlValue}
              projectName={projectName}
            />
          )}

          {/* Let the User view all Projects and manage them: view User-Projects, Delete, Save new Name. */}
          <ManageUser
            provideProjName={provideProjName}
            projectName={projectName}
            setProjectName={setProjectName}
            setProvideProjName={setProvideProjName}
            userData={userData}
            setUserData={setUserData}
            projectId={projectId}
            setprojectId={setprojectId}
            setLongurlValue={setLongurlValue}
            setCssValue={setCssValue}
            setJsValue={setJsValue}
            projectQuery={projectQuery}
            userID_from_Fingerprint={userID_from_Fingerprint}
            setUserID_from_Fingerprint={setUserID_from_Fingerprint}
            setSaving={setSaving}
            visitorId={visitorId}
            jsValue={jsValue}
            cssValue={cssValue}
            longurlValue={longurlValue}
            FingerprintJS={FingerprintJS}
            setpaneValues={setpaneValues}
          />
        </div>
        <SplitPane
          className={`${styles.imp} ${
            seeOnMobileDevice ? styles.marginTopZero : null
          } `}
          style={{ marginTop: "60px" }}
          split="horizontal"
          size={`${verticalPaneSize}%`}
          minSize={"50%"}
          onDragStarted={() => {
            setCurrentlyDragged(true);
          }}
          onDragFinished={(heightFromDragEvent) => {
            setCurrentlyDragged(false);
            setEditorHeightValue(`${heightFromDragEvent - 50}px`);
            setverticalPaneSize(`${heightFromDragEvent - 50}px`);
          }}
        >
          <SplitPane
            split="vertical"
            minSize="50%"
            size={`${horizontalSize}%`}
            onDragFinished={(size) => {
              setHorizontalSize(sliderSplitPane.CalcWidthPosition(size));
            }}
          >
            <CssEditor
              setEditorHeightValue={setEditorHeightValue}
              editorHeightValue={editorHeightValue}
              onChange={setCssValue}
              value={cssValue}
              setHorizontalSize={setHorizontalSize}
              horizontalSize={horizontalSize}
              setverticalPaneSize={setverticalPaneSize}
              verticalPaneSize={verticalPaneSize}
            />
            <JavascriptEditor
              setEditorHeightValue={setEditorHeightValue}
              editorHeightValue={editorHeightValue}
              onChange={setJsValue}
              value={jsValue}
              setHorizontalSize={setHorizontalSize}
              horizontalSize={horizontalSize}
              setverticalPaneSize={setverticalPaneSize}
              verticalPaneSize={verticalPaneSize}
            />
          </SplitPane>
          <iframe
            key={paneValues}
            src={paneValues}
            id="resultFrame"
            name="resultFrame"
            className={
              styles.previewIframe +
              ` resultFrame ${currentlyDragged && styles.isInteractive}`
            }
          ></iframe>
        </SplitPane>
      </div>
      {/*Tracking Pixel */}
      {dimensions && (
        <div className={styles.trackingPic}>{trackingPixel()}</div>
      )}
    </>
  );
};

export default Index;
