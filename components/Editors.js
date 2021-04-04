import React from "react";
import dynamic from "next/dynamic";
import styles from "./Editors.module.css";

export const JavascriptEditor = (props) => {
  return <Editor mode="javascript" title={"JS"} {...props} />;
};

export const CssEditor = (props) => {
  return <Editor mode="css" title={"CSS"} {...props} />;
};



// Workaround for  issue:  "window is not defined"
// it occurred when trying to run the  render on the Heroku server
// created a so-called NoSSR component:
// I had to work around an issue with AcerEditor-Component not beeing present while the server wanted to render it
// https://nextjs.org/docs/advanced-features/dynamic-import
// https://nextjs.org/docs/advanced-features/dynamic-import
// https://github.com/jaredpalmer/razzle/issues/1193#issuecomment-754596005
// https://www.npmjs.com/package/@next-tools/dynamic
const AcerEditor = dynamic(
    async () => {
        const ace = await require("react-ace");
        require("ace-builds/src-noconflict/mode-html");
        require("ace-builds/src-noconflict/mode-javascript");
        require("ace-builds/src-noconflict/mode-css");
        require("ace-builds/src-noconflict/theme-monokai");

        return ace;
    },
    {
        loading: () => (
            <p>Loading</p>
        ),
        ssr: false,
    },
);



const Editor = ({ mode, onChange, value, title, height }) => {
  return  (
    <div className={styles.editorContainer}>
      <div className={styles.editorTitle}>{title}</div>
      <AcerEditor
        mode={mode}
        theme="monokai"
        name={title}
        onChange={onChange}
        fontSize={18}
        width={"100%"}
        height={height}
        value={value}
        showPrintMargin={true}
        showGutter={true}
        tabSize={2}
        showPrintMargin={false} // ace_print-margin
        setOptions={{ useWorker: false }}
      />
    </div>
  );
};