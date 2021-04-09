 export default async (req, res) => {

  // dotENV Surfly KEY
     const surflyFetchURL = 'https://surfly.com/v2/sessions/?api_key=' + process.env.SURFLYKEY;
     var timestamp = Date.now();
  // ProjectID from query
     const { query: { id }, method, } = req;
     const projectID = id;
     const requestOptions   = { method: "GET", headers: { "Content-Type": "application/json" }, };



// ENV Vars in DEV and Production
// we have 3 env variables: NODE_ENV  and  DEVURL and PRODURL , all in the .env File
  // const serverURL      = process.env.NODE_ENV === "development" ? process.env.DEVURL : process.env.PRODURL;
  const serverURL = 'http://localhost:3000';


  const longurlAPI     = `${serverURL}/api/surfly/longurl/${projectID}` ;  //   console.log('longurlAPI from index.js: ',  longurlAPI)
  const projectDataURL = `${serverURL}/api/surfly/projectData/${projectID}?time=`+timestamp;  //   console.log('projectDataURL from index.js: ', projectDataURL)



  // API LongURL for this ProjectID
     const response = await fetch(longurlAPI, requestOptions);
     const { longUrlResponse } = await response.json();

  // Surfly-API receives projectDataURL and longUrlResponse
     fetch(surflyFetchURL, {
             method: "POST",
             headers: {
                 "Content-Type": "application/json; charset=utf-8"
             },
             body: JSON.stringify({
                 script_embedded: projectDataURL,
                 ui_off: "true",
                 url: longUrlResponse,
                 splash: "false"
             })
         })
         .then(function(response) {
             if (response.ok) {
                 return response.json();
             } else {
                 throw new Error("Could not reach the API: " + response.statusText);
             }
         })
         .then(function(response) {
              const SurflyResponseURL =    response.leader_link ;
             res.status(200).json( {SurflyResponseURL} )
         })
         .catch(function(error) {
             console.log('error: ');
             console.log(error.message);
         });
 };

export const config = { api: { externalResolver: true, }, }