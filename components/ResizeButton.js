import React, {useState, useEffect} from "react";
import editorStyles from "./Editors.module.css";
import buttonStyles from "../pages/index.module.css";
import sliderSplitPane from "../utils/splitpane";

const ResizeButton = ({mode, setverticalPaneSize,   verticalPaneSize, setHorizontalSize, horizontalSize, setEditorHeightValue}) => {

  const [buttonText, setButtonText] = useState('default tetxt');

  useEffect(() => {
    // console.log('horizontalSize: ', horizontalSize)
    // console.log('verticalPaneSize: ', verticalPaneSize)
                    if (mode === "css") {
                           if (verticalPaneSize > 55) {
                               setButtonText('css bigger 55');    // sliderSplitPane.cssRegularScreenView(setverticalPaneSize, setHorizontalSize, setEditorHeightValue);
                          } else {
                               setButtonText('css smaller 55 now'); //  sliderSplitPane.cssFullscreen(setverticalPaneSize, setHorizontalSize, setEditorHeightValue);
                          }
                  }
                  if (mode === "javascript")  {
                          if (verticalPaneSize > 55) {
                                 setButtonText('JS bigger 55');  // sliderSplitPane.jsRegularScreenView(setverticalPaneSize, setHorizontalSize, setEditorHeightValue);
                          } else {
                                 setButtonText('JS smaller 55');  // sliderSplitPane.jsFullscreen(setverticalPaneSize, setHorizontalSize, setEditorHeightValue);
                          }
                  }
 }, [horizontalSize]);




                return (
                            <button className={editorStyles.toggle + ' ' + buttonStyles.button }
                                     >
                                    {/*onClick={toggleFullScreen}*/}
                                     {buttonText}

                            </button>
                       )
              } ;


export default ResizeButton