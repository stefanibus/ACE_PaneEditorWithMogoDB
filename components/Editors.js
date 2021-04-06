import React, {useState} from "react";
import dynamic from "next/dynamic";
import editorStyles from "./Editors.module.css";
import buttonStyles from "../pages/index.module.css";
import sliderSplitPane from "../utils/splitpane";



export const CssEditor = (props) => {

  return <Editor mode="css" title={"CSS"} {...props} />;
};

export const JavascriptEditor = (props) => {
  return <Editor mode="javascript" title={"JS"} {...props} />;
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



const Editor = ({ mode, onChange, value, title, height, setVerticalSize, setHorizontalSize }) => {





        const [fullScreen, setFullScreen] = useState(false);

        const ToggleJS = ({mode, setVerticalSize, setHorizontalSize}) => {
                const toggleFullScreen = () => {
                            //
                             setFullScreen(fullScreen => !fullScreen);


                  if (mode === "css") {
                    console.log('this is the CSS Pane');
                     if (fullScreen) {
                      console.log('CSS-fullScreen should be true: ', fullScreen);
                      sliderSplitPane.cssRegularScreenView(setVerticalSize, setHorizontalSize);
                    } else {
                      console.log('CSS-fullScreen should be false: ', fullScreen);
                      sliderSplitPane.cssFullscreen(setVerticalSize, setHorizontalSize);
                    }
                  } else {
                    console.log('this is the  JS Pane')
                    if (fullScreen) {
                      console.log('JS-fullScreen should be true: ', fullScreen);
                      sliderSplitPane.jsRegularScreenView(setVerticalSize, setHorizontalSize);
                    } else {
                      console.log('JS-fullScreen should be false: ', fullScreen);
                      sliderSplitPane.jsFullscreen(setVerticalSize, setHorizontalSize);
                    }


                  }
                }
                return (
                            <button className={editorStyles.toggle + ' ' + buttonStyles.button }
                                    onClick={toggleFullScreen} >{fullScreen ? ' Regular View ' :' F11 Full Screen ' }
                            </button>
                       )
              } ;
  return  (
    <div className={editorStyles.editorContainer}>
      <div className={editorStyles.editorTitle}>
        {title}
        <ToggleJS  mode={mode}  setVerticalSize={setVerticalSize} setHorizontalSize={setHorizontalSize} />
      </div>
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