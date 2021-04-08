import React, { useState } from "react";
import editorStyles from "./Editors.module.css";
import buttonStyles from "../pages/index.module.css";
import sliderSplitPane from "../utils/splitpane";

const TogglePaneView = ({
    mode,
    buttonText,
    setverticalPaneSize,
    verticalPaneSize,
    setHorizontalSize,
    horizontalSize,
    setEditorHeightValue
}) => {

    const slideView_CssRegular = () => { sliderSplitPane.cssRegularScreenView(setverticalPaneSize, setHorizontalSize, setEditorHeightValue); }
    const slideView_JsRegular  = () => { sliderSplitPane.jsRegularScreenView(setverticalPaneSize, setHorizontalSize, setEditorHeightValue);}
    const slideView_CssFull    = () => { sliderSplitPane.cssFullscreen(setverticalPaneSize, setHorizontalSize, setEditorHeightValue, verticalPaneSize);}
    const slideView_JsFull     = () => { sliderSplitPane.jsFullscreen(setverticalPaneSize, setHorizontalSize, setEditorHeightValue, verticalPaneSize)}

    const resizeThePane = () => {
        if (mode === "css") {
            if (horizontalSize > 55) { slideView_CssRegular(); }  else { slideView_CssFull(); }
        }
        if (mode === "javascript") {
            if (horizontalSize < 45) { slideView_JsRegular() } else { slideView_JsFull(); }
        }
    }

    return (
        <button
          onClick={() => {resizeThePane()}}
          className={`${editorStyles.toggle} ${buttonStyles.button} ${(horizontalSize < 45) &&  editorStyles.small   } `} >
          {buttonText}
      </button>
    )
}
export default TogglePaneView