const db_communication = {

//  send to MongoDB
 	sendDB_Request:   async (requestOptions, data4project, setSaving, setProvideProjName, userID_from_Fingerprint, router) => {

	    const response = await fetch(data4project, requestOptions);
	    const {
	      data: { updatedRecord, newRecordId },
	    } = await response.json();
	    setSaving(false);
	    setProvideProjName(false);
	    if (!updatedRecord) {  //
	        // console.log('CLONE CONTENT NOW ==> Only if updatedRecord is FALSE (meaning: POST is false: (see here:) ', updatedRecord ' that would mean  we do not have same user AND same project = (thus we do not OVERWRITE ), ==>we will clone and then update both Params in the adress bar: see: newRecordId  and: userID_from_Fingerprint, ',   newRecordId , userID_from_Fingerprint,    )   //
 	        await router.push(`?projectQuery=${newRecordId}&userQuery=${userID_from_Fingerprint}`);
	    }
	 //  console.log('mongo-Communication.js: Result stored in MongoDB: either updatedRecord (true undefined), or we created a newRecordId  (undefined 000000001 ): ',  updatedRecord, newRecordId )
 	},
	 //   Save to MongoDB (New Project)
	 saveNewProject: () => {
	      setSaving(true);
	      var meth = "PUT";
	              const AutoCreateFileName = (URLstring) => {
	                  const StringNoTrialingSlash = URLstring.replace(/\/$/, '');
	                  var filename = StringNoTrialingSlash.substring(StringNoTrialingSlash.lastIndexOf('/')+1);
	                  return filename;
	              }
	              // ==> this is a new Project!==> we will empty the pre-existing data (exept for the longurl )
	              const requestOptions = {
	                method: meth,
	                headers: { "Content-Type": "application/json" },
	                body: JSON.stringify({
	                  css: '/* your additional CSS Code wil be proxied into: ' + longurlValue + ' */\n/* start coding here   (and click on "look at result") */\n\n.collapseThisLineInThisEditor {\n    color: #0f5132;\n    background-color: wheat;\n    font-size: 1.4rem;\n}   ' ,
	                  js: '// your additional JS Code wil be proxied into: \n\n// ' + longurlValue  +'\n\n// const collapseThisLine = () =>  {\n//console.log( "You can collapse this line --> and manage your space in this js-pane wisely! " } \n\n// start coding here   (and click on "look at result")  \n\n',
	                  id: projectQuery,
	                  userID: userID_from_Fingerprint,
	                  projectName: AutoCreateFileName(longurlValue),
	                  longurl: longurlValue
	                }),
	            };
	            db_communication.sendDB_Request(requestOptions, data4project, setSaving, setProvideProjName, userID_from_Fingerprint, router)
	},
	// Save to MongoDB (existing User)
	save: async (
	    data4project,
	    setSaving,
	    visitorId,
	    userID_from_Fingerprint,
	    projectQuery,
	    projectName,
	    setProvideProjName,
	    jsValue,
	    cssValue,
	    longurlValue,
	    router,
	    setUserID_from_Fingerprint
	    ) => {

		    setSaving(true);
		    var meth ;
		    if (visitorId) {
		          // visitor and  user are EQUAL to one another
		          if (visitorId == userID_from_Fingerprint) {   // alert('visitor and  user are EQUAL to one another ' )
		          // => that means we EITHER Update (overwrite) OR Clone the Project
		            meth = projectQuery ? "POST" : "PUT"; //  POST = updatedRecord (overwrite) , Put = newRecordId (create new)
		          }
		          else { // alert("same Project, but different User");
		            meth = "PUT";
		            alert("We cloned this Project for you. If you wish, You can provide a different name for the Project later. Use the pencil in the top-right-corner to change the Name.   " );
		          }
		    }
		    else {
		      alert("This alert should only come up if you are OFFLINE! Take care:  Your result has probably not been stored!");
		      setUserID_from_Fingerprint(visitorId);
		      meth = "PUT";
		    }

		    // ProjectName Field is left empty
		    if (projectName == " " || projectName == "" ) {
		      alert("Please input a new project name");
		      setProvideProjName(true);
		      setSaving(false);
		      return false;
		    }

		    // dynamically replace all alert functions inside of the code in the JS-Pane
		    if (jsValue.includes("alert(")) {
		          setSaving(false);
		          const search = 'alert(';
		          const replaceWith = 'console.log(';
		          const result = jsValue.replaceAll(search, replaceWith);
		          setJsValue(result)
		          alert("You have used an ALERT inside of your JS-Code! The Alert-method cannot be used within the proxied result-page! Therefore We changed your code on your behalf: PLEASE LOOK AT YOUR CODE AGAIN TO ACKNOWLEDGE THE CHANGE we did: We replaced all your 'Alert('-methods with the 'Console.log('  -method. Please take a look at the change. Afterwards you may want to hit the save button again. You will then be able to save your work. ", result);
		      return false;
		    }

		    // define request options towards MongoDB
		    const requestOptions = {
		      method: meth,
		      headers: { "Content-Type": "application/json" },
		      body: JSON.stringify({
		        css: cssValue,
		        js: jsValue,
		        id: projectQuery,
		        userID: userID_from_Fingerprint,
		        projectName: projectName,
		        longurl: longurlValue
		      }),
		    };
		    db_communication.sendDB_Request(requestOptions, data4project, setSaving, setProvideProjName, userID_from_Fingerprint, router)
	},
//   get ProjectList from MongoDB
	getProjectListForUser: async (FingerprintJS, setUserID_from_Fingerprint, setUserData, serverURL) => {
	    const fp = await FingerprintJS.load();
	    const result = await fp.get();
	    const identificationOfTheVisitor = result.visitorId;
	    setUserID_from_Fingerprint(identificationOfTheVisitor);
	    const requestOptions = {
	      method: "GET",
	      headers: { "Content-Type": "application/json" },
	    };
	    const usersAPI_url = `${serverURL}/api/users/${identificationOfTheVisitor}`;
	    console.log('usersAPI_url: ', usersAPI_url)
	    const response = await fetch(usersAPI_url, requestOptions);
	    const { data } = await response.json();
	    setUserData(data);
	}
}

export default db_communication