const sliderSplitPane = {
 	closeSlide:  (setCodePenSizeValue) => {
		var i = 40;                  //  set your counter to 40
		function myLoop() {         //  create a loop function
		  setTimeout(function() {   //  call a setTimeout when the loop is called
		    // console.log('scroll close: '+i);
		    setCodePenSizeValue(i)
		    i= i-1;                    //  decrement the counter by 4
		    if (i > -1) {           //  if the counter > -1, call the loop function
		      myLoop();             //  ..  again which will trigger another
		    }                       //  ..  setTimeout()
		  }, 10)
		}
  	    myLoop();                   //  start the loop
 	},
 	openSlide: (setCodePenSizeValue) => {
		var i = 0;                  //  set your counter to  0
		function myLoop() {         //  create a loop function
		  setTimeout(function() {   //  call a setTimeout when the loop is called
		    // console.log('scroll open: '+i);
		    setCodePenSizeValue(i)
		    i= i+1;                    //  increment the counter by 4
		    if (i < 41) {           //  if the counter > 41, call the loop function
		      myLoop();             //  ..  again which will trigger another
		    }                       //  ..  setTimeout()
		  }, 10)
		}
		myLoop();                   //  start the loop
 	}
}

export default sliderSplitPane