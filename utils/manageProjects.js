const manageProjects = {
 	newProject_Show:  ( sliderSplitPane, setverticalPaneSize, setAskLongURL, setLongurlValueTempoary, longurlValue, setLongurlValue    ) => {
      //   open NewProject-Area
      //   What I do here is passing around Props all over the place.
      //   It does not seem to make enough sense.
      //   It is bloating up my overall-code-base due to all of that prop-passing
                sliderSplitPane.closeSlide(setverticalPaneSize);
                setAskLongURL(true);
                setLongurlValueTempoary(longurlValue)
                setLongurlValue('')
 	},
 	validateURL:  (str) => {
		  //   URL Validation
		      var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
		        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
		        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
		        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
		        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
		        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
		      return !!pattern.test(str);
 	},
 	NewProject_Hide:  (sliderSplitPane, setverticalPaneSize, setAskLongURL, setLongurlValue, longurlValueTempoary ) => {
		//   close NewProject-Area
		            sliderSplitPane.openSlide(setverticalPaneSize);
		            setAskLongURL(false);
		            setLongurlValue(longurlValueTempoary) // back to old value
	}
}

export default manageProjects
