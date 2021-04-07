const sliderSplitPane = {
 	closeSlide:  (setverticalPaneSize) => {
		var i = 40;                  //  set your counter to 40
		function myLoop() {         //  create a loop function
		  setTimeout(function() {   //  call a setTimeout when the loop is called
		    // console.log('scroll close: '+i);
		    setverticalPaneSize(i)
		    i= i-1;                    //  decrement the counter
		    if (i > -1) {           //  if the counter > -1, call the loop function
		      myLoop();             //  ..  again which will trigger another
		    }                       //  ..  setTimeout()
		  }, 10)
		}
  	    myLoop();                   //  start the loop
 	},
 	openSlide: (setverticalPaneSize) => {
		var i = 0;                  //  set your counter to  0
		function myLoop() {         //  create a loop function
		  setTimeout(function() {   //  call a setTimeout when the loop is called
		    // console.log('scroll open: '+i);
		    setverticalPaneSize(i)
		    i= i+1;                    //  increment the counter
		    if (i < 41) {           //  if the counter > 41, call the loop function
		      myLoop();             //  ..  again which will trigger another
		    }                       //  ..  setTimeout()
		  }, 10)
		}
		myLoop();                   //  start the loop
 	},
 	cssFullscreen:  (setverticalPaneSize, setHorizontalSize, setEditorHeightValue, verticalPaneSize) => {

		console.log('verticalPaneSize: ', verticalPaneSize)

		var i = 30;                  //  set your counter to  0
		var w ;          	        //  set your counter to  0
		function myLoop() {         //  create a loop function
		  setTimeout(function() {   //  call a setTimeout when the loop is called

		      // console.log('scroll open: '+i);

			if (verticalPaneSize > 80 ) { //console.log('do not change verticalPaneSize' )
		       setverticalPaneSize(90);
			} else { // console.log('DO change verticalPaneSize' )
				setverticalPaneSize(i);//
			}
            setEditorHeightValue(`90vh`);

		     setHorizontalSize(w); //setHorizontalSize(90);
		    i= i+2;                    //  increment the counter
		    w= 50+i/2;
		    if (i < 91) {           //  if the counter > 41, call the loop function
		      myLoop();             //  ..  again which will trigger another
		    }                       //  ..  setTimeout()
		  }, 10)
		}
		myLoop();                   //  start the loop
 	},
 	jsFullscreen:  (setverticalPaneSize, setHorizontalSize, setEditorHeightValue, verticalPaneSize) => {
		var i = 30;                  //  set your counter to  0
		var w ;          	        //  set your counter to  0
		function myLoop() {         //  create a loop function
		  setTimeout(function() {   //  call a setTimeout when the loop is called

		    //   console.log('scroll open: '+ i);
		    //
		     if (verticalPaneSize > 80 ) {
				console.log('do not change verticalPaneSize' )
		       setverticalPaneSize(90);
			} else {
				console.log('DO change verticalPaneSize' )
				setverticalPaneSize(i);//
			}
            setEditorHeightValue(`90vh`);
		    // setverticalPaneSize(90);
   	    	//
   	    	setHorizontalSize(w); //  setHorizontalSize(6);
		    i= i+2;                    //  increment the counter
		    w= 50-i/2;
		    if (i < 91) {           //  if the counter > 41, call the loop function
		      myLoop();             //  ..  again which will trigger another
		    }                       //  ..  setTimeout()
		  }, 10)
		}
		myLoop();                   //  start the loop
 	},
 	cssRegularScreenView: (setverticalPaneSize, setHorizontalSize, setEditorHeightValue) => {
		var i =  70;                  //  set your counter to 40
		var w;		                  //  set your counter to 40
		function myLoop() {         //  create a loop function
		  setTimeout(function() {   //  call a setTimeout when the loop is called

		    // console.log('scroll close: '+ i);
		     setverticalPaneSize(i) // setverticalPaneSize(31)
            setEditorHeightValue(`30vh`);
		     setHorizontalSize(w); // setHorizontalSize(50);
		    i= i-2;                    //  decrement the counter
		    w=  15 + i;
		    if (i >  31) {           //  if the counter > -1, call the loop function
		      myLoop();             //  ..  again which will trigger another
		    }                       //  ..  setTimeout()
		  }, 10)
		}
  	    myLoop();                   //  start the loop
 	},
 	jsRegularScreenView: (setverticalPaneSize, setHorizontalSize, setEditorHeightValue) => {
		var i =  90;                  //  set your counter to 40
		var w =  100 ;		                  //  set your counter to 40
		function myLoop() {         //  create a loop function
		  setTimeout(function() {   //  call a setTimeout when the loop is called

		    //  console.log('scroll close: '+ i);
		    //
		    setverticalPaneSize(i) // setverticalPaneSize(31)
            setEditorHeightValue(`30vh`);
			w=  (100-i);
		    if (w <  48.1) {
		   // console.log('scroll width: '+ w);
		     setHorizontalSize(w); //setHorizontalSize(50);
			}
		    i= i-2;
		    if (i >  31) {         //  if the counter > -1, call the loop function
		      myLoop();             //  ..  again which will trigger another
		    }                       //  ..  setTimeout()
		  }, 10)
		}
  	    myLoop();                   //  start the loop
 	}
}

export default sliderSplitPane