import axios from "axios";

 export default async (req, res) => {

  // dotENV Surfly KEY
     const surflyFetchURL = 'https://surfly.com/v2/sessions/?api_key=' + process.env.SURFLYKEY;
     var timestamp = Date.now();
  // get ProjectID from query
     const { query: { id }, method, } = req;
     const projectID = id;
     const requestOptions   = { method: "GET", headers: { "Content-Type": "application/json" }, };

  // API fetch LongURL for this ProjectID
     const response = await fetch(`https://guarded-anchorage-85319.herokuapp.com/api/surfly/longurl/${projectID}`, requestOptions);
     const { longUrlResponse } = await response.json();

  // API fetch ProjectData for this ProjectID
     const projectDataURL = `https://guarded-anchorage-85319.herokuapp.com/api/surfly/projectData/${projectID}?time=`+timestamp ;

  // Surfly-API now receives the above TWO Responses
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

export const config = { api: { externalResolver: true, }, } // https://nextjs.org/docs/api-routes/api-middlewares#custom-config