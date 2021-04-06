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
 	cssFullscreen:  (setverticalPaneSize, setHorizontalSize, setEditorHeightValue) => {
		var i = 30;                  //  set your counter to  0
		var w ;          	        //  set your counter to  0
		function myLoop() {         //  create a loop function
		  setTimeout(function() {   //  call a setTimeout when the loop is called

		    // console.log('scroll open: '+i);
		    //setverticalPaneSize(i);
		    setverticalPaneSize(90);
            setEditorHeightValue(`90vh`);

		    //setHorizontalSize(w);
		    setHorizontalSize(90);
		    i= i+2;                    //  increment the counter
		    w= 50+i/2;
		    if (i < 91) {           //  if the counter > 41, call the loop function
		      myLoop();             //  ..  again which will trigger another
		    }                       //  ..  setTimeout()
		  }, 10)
		}
		myLoop();                   //  start the loop
 	},
 	jsFullscreen:  (setverticalPaneSize, setHorizontalSize, setEditorHeightValue) => {
		var i = 30;                  //  set your counter to  0
		var w ;          	        //  set your counter to  0
		function myLoop() {         //  create a loop function
		  setTimeout(function() {   //  call a setTimeout when the loop is called

		    // console.log('scroll open: '+i);
		    setverticalPaneSize(i);
            setEditorHeightValue(`90vh`);
		    // setverticalPaneSize(90);
   	    	setHorizontalSize(w);
		    // setHorizontalSize(10);
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
		var i =  90;                  //  set your counter to 40
		var w;		                  //  set your counter to 40
		function myLoop() {         //  create a loop function
		  setTimeout(function() {   //  call a setTimeout when the loop is called

		    // console.log('scroll close: '+i);
		    //setverticalPaneSize(i)
		    setverticalPaneSize(31)
            setEditorHeightValue(`30vh`);
		    // setHorizontalSize(w);
		    setHorizontalSize(50);
		    i= i-2;                    //  decrement the counter
		    w=  20 + i;
		    if (i >  31) {           //  if the counter > -1, call the loop function
		      myLoop();             //  ..  again which will trigger another
		    }                       //  ..  setTimeout()
		  }, 10)
		}
  	    myLoop();                   //  start the loop
 	},
 	jsRegularScreenView: (setverticalPaneSize, setHorizontalSize, setEditorHeightValue) => {
		var i =  90;                  //  set your counter to 40
		var w;		                  //  set your counter to 40
		function myLoop() {         //  create a loop function
		  setTimeout(function() {   //  call a setTimeout when the loop is called

		    // console.log('scroll close: '+i);
		    // setverticalPaneSize(i)
		    setverticalPaneSize(31)
            setEditorHeightValue(`30vh`);
		    // setHorizontalSize(w);
		    setHorizontalSize(50);
		    i= i-2;                    //  decrement the counter
		    w= 75-i;
		    if (i >  31) {           //  if the counter > -1, call the loop function
		      myLoop();             //  ..  again which will trigger another
		    }                       //  ..  setTimeout()
		  }, 10)
		}
  	    myLoop();                   //  start the loop
 	}
}

export default sliderSplitPane