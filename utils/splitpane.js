const sliderSplitPane = {
 	closeSlide:  (setverticalPaneSize) => {
 		console.log('test')
		var i = 40;                  //  set your counter to 40
		function myLoop() {         //  create a loop function
		  setTimeout(function() {   //  call a setTimeout when the loop is called // console.log('scroll close: '+i);
		    setverticalPaneSize(i)  // set the useeffect
		    i= i-1;                 //  decrement the counter
		    if (i > -1) {           //  if the counter > -1, call the loop function
		      myLoop();             //  trigger another loop
		    }
		  }, 10)					//  End setTimeout()
		}
  	    myLoop();                   //  start the loop initially
 	},
 	openSlide: (setverticalPaneSize) => {
		var i = 0;
		function myLoop() {
		  setTimeout(function() {
		    setverticalPaneSize(i)
		    i= i+1;
		    if (i < 41) {
		      myLoop();
		    }
		  }, 10)
		}
		myLoop();
 	},
 	cssFullscreen:  (setverticalPaneSize, setHorizontalSize, setEditorHeightValue, verticalPaneSize) => {

		var i = 30;
		var w ;
		function myLoop() {
		  setTimeout(function() {

			if (verticalPaneSize > 80 ) {
		       setverticalPaneSize(90);
			} else {
				setverticalPaneSize(i);
			}
            setEditorHeightValue(`90vh`);
		     setHorizontalSize(w);
		    i= i+2;
		    w= 50+i/2;
		    if (i < 91) {
		      myLoop();
		    }
		  }, 10)
		}
		myLoop();
 	},
 	jsFullscreen:  (setverticalPaneSize, setHorizontalSize, setEditorHeightValue, verticalPaneSize) => {
		var i = 30;
		var w ;
		function myLoop() {
		  setTimeout(function() {
		     if (verticalPaneSize > 80 ) {
		       setverticalPaneSize(90);
			} else {
				setverticalPaneSize(i);
			}
            setEditorHeightValue(`90vh`);
   	    	setHorizontalSize(w);
		    i= i+2;
		    w= 50-i/2;
		    if (i < 91) {
		      myLoop();
		    }
		  }, 10)
		}
		myLoop();
 	},
 	cssRegularScreenView: (setverticalPaneSize, setHorizontalSize, setEditorHeightValue) => {
		var i =  70;
		var w;
		function myLoop() {
		  setTimeout(function() {
		     setverticalPaneSize(i)
            setEditorHeightValue(`30vh`);
		     setHorizontalSize(w);
		    i= i-2;
		    w=  15 + i;
		    if (i >  31) {
		      myLoop();
		    }
		  }, 10)
		}
  	    myLoop();
 	},
 	jsRegularScreenView: (setverticalPaneSize, setHorizontalSize, setEditorHeightValue) => {
		var i =  90;
		var w =  100 ;
		function myLoop() {
		  setTimeout(function() {
		    //
		    setverticalPaneSize(i)
            setEditorHeightValue(`30vh`);
			w=  (100-i);
		    if (w <  48.1) {
		     setHorizontalSize(w);
			}
		    i= i-2;
		    if (i >  31) {
		      myLoop();
		    }
		  }, 10)
		}
  	    myLoop();
 	}
}

export default sliderSplitPane