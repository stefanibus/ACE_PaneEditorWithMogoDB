const sliderSplitPane = {
 	closeSlide:  (setverticalPaneSize) => {
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

 		// established resize without the sliding-effect to circumvent pane-size issues
        setEditorHeightValue(`81vh`);
	    setHorizontalSize(80);
	    setverticalPaneSize(91);

		// var i = 30;
		// var w ;
		// function myLoop() {
		//   setTimeout(function() {

		// 	if (verticalPaneSize > 80 ) {
		//        setverticalPaneSize(90);
		// 	} else {
		// 		setverticalPaneSize(i);
		// 	}
  //           setEditorHeightValue(`90vh`);
		//      setHorizontalSize(w);
		//     i= i+2;
		//     w= 50+i/2;
		//     if (i < 91) {
		//       myLoop();
		//     }
		//   }, 10)
		// }
		// myLoop();
 	},
 	jsFullscreen:  (setverticalPaneSize, setHorizontalSize, setEditorHeightValue, verticalPaneSize) => {

 		// established resize without the sliding-effect to circumvent pane-size issues
            setEditorHeightValue(`81vh`);
   	    	setHorizontalSize(10);
   	    	setverticalPaneSize(91);

		// var i = 30;
		// var w ;
		// function myLoop() {
		//   setTimeout(function() {
		//      if (verticalPaneSize > 80 ) {
		//        setverticalPaneSize(90);
		// 	} else {
		// 		setverticalPaneSize(i);
		// 	}
  //           setEditorHeightValue(`90vh`);
  //  	    	setHorizontalSize(w);
		//     i= i+2;
		//     w= 50-i/2;
		//     if (i < 91) {
		//       myLoop();
		//     }
		//   }, 10)
		// }
		// myLoop();
		// trigger the manual dragging of the vertical HandeBar in order to reset all of the various Splitpane size values

 	},
 	cssRegularScreenView: (setverticalPaneSize, setHorizontalSize, setEditorHeightValue) => {

 		// established resize without the sliding-effect to circumvent pane-size issues
        setEditorHeightValue(`40.5vh`);
	    setHorizontalSize(48.1);
	    setverticalPaneSize(48);

		// var i =  70;
		// var w;
		// function myLoop() {
		//   setTimeout(function() {
		//      setverticalPaneSize(i)
  //           setEditorHeightValue(`30vh`);
		//      setHorizontalSize(w);
		//     i= i-2;
		//     w=  15 + i;
		//     if (i >  31) {
		//       myLoop();
		//     }
		//   }, 10)
		// }
  // 	    myLoop();
 	},
 	jsRegularScreenView: (setverticalPaneSize, setHorizontalSize, setEditorHeightValue) => {

 		// established resize without the sliding-effect to circumvent pane-size issues
        setEditorHeightValue(`40.5vh`);
	    setHorizontalSize(48.1);
	    setverticalPaneSize(48);

		// var i =  90;
		// var w =  100 ;
		// function myLoop() {
		//   setTimeout(function() {
		//     //
		//     setverticalPaneSize(i)
  //           setEditorHeightValue(`30vh`);
		// 	w=  (100-i);
		//     if (w <  48.1) {
		//      setHorizontalSize(w);
		// 	}
		//     i= i-2;
		//     if (i >  31) {
		//       myLoop();
		//     }
		//   }, 10)
		// }
  // 	    myLoop();
 	},
 	CalcWidthPosition: (size) => {
     let intViewportWidth =  window.innerWidth;
     let rightPosition    =  (intViewportWidth - size); // size-value is counted upwards from the right by default:
     let leftPosition     =  (intViewportWidth - rightPosition );  // we are switching that logic around
     let ViewPortPosition = ((leftPosition  /  intViewportWidth ) * 100 ).toFixed(2);
     //console.log('ViewPortPosition will calc the Horizontal-width-position of the HandleBar ', ViewPortPosition)
     return ViewPortPosition;
 	}
}

export default sliderSplitPane