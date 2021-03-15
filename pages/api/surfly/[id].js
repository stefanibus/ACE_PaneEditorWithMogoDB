import axios from "axios";

 export default async (req, res) => {

  // dotENV Surfly KEY
     const surflyFetchURL = 'https://surfly.com/v2/sessions/?api_key=' + process.env.SURFLYKEY;
     var timestamp = Date.now();
  // get [ID] from query
     const { query: { id }, method, } = req;
     const projectID = id;
     const requestOptions   = { method: "GET", headers: { "Content-Type": "application/json" }, };

  // API fetch LongURL
     const response = await fetch(`https://guarded-anchorage-85319.herokuapp.com/api/surfly/longurl/${projectID}`, requestOptions);
     const { longUrlResponse } = await response.json();

  // API fetch ProjectData
     const projectData = await axios.get('https://guarded-anchorage-85319.herokuapp.com/api/surfly/projectData/604ccd50176c15486851f14b')
     .then( (data) => {  return data.data   } )



   // console.log('projectData: ', projectData )

    // console.log('longUrlResponse: ', longUrlResponse )



  // API https://guarded-anchorage-85319.herokuapp.com/api/surfly/projectData/${projectID}/?timestamp=` + timestamp
     // const projectdata =  await fetch('http://localhost:3000/api/surfly/projectData/604ccd50176c15486851f14b');
     // //
     // console.log('typeof projectdata: ', typeof projectdata );
     // console.log('projectdata ',projectdata);


     // const fu = projectdata.toString() ;
     // console.log('fu: ', fu)


     // const { projectDataResponse } = await projectdata.json();
     // console.log('projectDataResponse ',projectDataResponse);
     // if (projectDataResponse.status !== 200) { await router.push("/404"); }







  // // API fetch Surfly with the above TWO dynamic Params called projectDataResponse and longUrlResponse (both related to projectID)
     fetch(surflyFetchURL, {
             method: "POST",
             headers: {
                 "Content-Type": "application/json; charset=utf-8"
             },
             body: JSON.stringify({
                 script_embedded: 'https://guarded-anchorage-85319.herokuapp.com/api/surfly/projectData/604ccd50176c15486851f14b',
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
             // console.log('response', response)
               // console.log('response', response.leader_link);
              const SurflyResponseURL =    response.leader_link ;
             res.status(200).json( {SurflyResponseURL} )
         })
         .catch(function(error) {
             console.log('error: ');
             console.log(error.message);
         });


         // DEV:  test without fetching Surfly API          //  res.status(200).json( 'API DEACTIVATED FOR TEST-PURPOSES projectID ' )

 };

export const config = {   api: {     externalResolver: true,   }, }
// Documantation for externalResolver   https://nextjs.org/docs/api-routes/api-middlewares#custom-config