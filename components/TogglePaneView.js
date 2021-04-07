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

    const resizeThePane = () => {


        if (mode === "css") {
            if (horizontalSize > 55) {
                sliderSplitPane.cssRegularScreenView(setverticalPaneSize, setHorizontalSize, setEditorHeightValue);
            } else {
                sliderSplitPane.cssFullscreen(setverticalPaneSize, setHorizontalSize, setEditorHeightValue, verticalPaneSize);
            }
        }
        if (mode === "javascript") {
            if (horizontalSize < 45) {
                sliderSplitPane.jsRegularScreenView(setverticalPaneSize, setHorizontalSize, setEditorHeightValue);
            } else {
                sliderSplitPane.jsFullscreen(setverticalPaneSize, setHorizontalSize, setEditorHeightValue, verticalPaneSize);
            }
        }
    }


    return (
        <button
        onClick={() => {resizeThePane()}}
        className={editorStyles.toggle + ' ' + buttonStyles.button } >
        {buttonText}
      </button>
    )
}
export default TogglePaneView