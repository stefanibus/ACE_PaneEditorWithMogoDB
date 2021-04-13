const manageProjects = {
 	newProject_Show:  ( sliderSplitPane, setverticalPaneSize, setAskLongURL, setLongurlValueTempoary, longurlValue, setLongurlValue    ) => {
      //   open NewProject-Area
                sliderSplitPane.closeSlide(setverticalPaneSize);
                setAskLongURL(true);
                setLongurlValueTempoary(longurlValue)
                setLongurlValue('')
 	}
}

export default manageProjects

