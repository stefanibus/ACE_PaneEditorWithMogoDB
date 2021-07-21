import React, {useState, useEffect} from "react";
import dynamic from "next/dynamic";
import editorStyles from "./Editors.module.css";
import TogglePaneView from "./TogglePaneView";


export const CssEditor          = (props) => {
    return <Editor {...props} title={"CSS"} mode="css"   />;
};
export const JavascriptEditor   = (props) => {
    return <Editor {...props} title={"JS"}  mode="javascript" />;
};

const AcerEditor = dynamic(
    async () => {
        const ace = await require("react-ace");
        require("ace-builds/src-noconflict/mode-html");
        require("ace-builds/src-noconflict/mode-javascript");
        require("ace-builds/src-noconflict/mode-css");
        require("ace-builds/src-noconflict/theme-monokai");

        return ace;
    },
    { loading: () => ( <p>Loading</p> ), ssr: false, },
);


const Editor = ({
  mode,
  onChange,
  value,
  title,
  editorHeightValue,
  setverticalPaneSize,
  verticalPaneSize,
  setHorizontalSize,
  horizontalSize,
  setEditorHeightValue
  }) => {

  const [buttonText, setButtonText] = useState('F11');

    useEffect(() => {
        if (mode === "css") {
               if (horizontalSize > 55) { setButtonText('go back to Regular View'); }
               else { setButtonText('F11'); }
        }
        if (mode === "javascript")  {
              if (horizontalSize < 45) { setButtonText('go back to Regular View'); }
              else { setButtonText('F11'); }
        }
    }, [horizontalSize]);


    return  (
      <div className={editorStyles.editorContainer}>
        <div className={editorStyles.editorTitle}>
          {title}
          <TogglePaneView
                    mode={mode}
                    setverticalPaneSize={setverticalPaneSize}
                    setHorizontalSize={setHorizontalSize}
                    setEditorHeightValue={setEditorHeightValue}
                    verticalPaneSize={verticalPaneSize}
                    horizontalSize={horizontalSize}
                    buttonText={buttonText}
                    />
        </div>
        <AcerEditor
          mode={mode}
          theme="monokai"
          name={title}
          onChange={onChange}
          fontSize={18}
          width={"100%"}
          height={editorHeightValue}
          value={value}
          showPrintMargin={true}
          showGutter={true}
          tabSize={2}
          showPrintMargin={false} // ace_print-margin
          setOptions={{ useWorker: false } }
          onLoad={editor => {
              editor.once("change", function() {
                editor.session.foldAll()
                });
              }}
        />
      </div>
      );
  };