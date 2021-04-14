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
	 // 		 console.log('mongo-Communication.js: Result stored in MongoDB: either updatedRecord (true undefined), or we created a newRecordId  (undefined 000000001 ): ',  updatedRecord, newRecordId )
 	}
}

export default db_communication