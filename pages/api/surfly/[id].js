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
     if (response.status !== 200) { await router.push("/404"); }

  // API fetch Surfly with TWO dynamic Params = projectID and longUrlResponse!
     fetch(surflyFetchURL, {
             method: "POST",
             headers: {
                 "Content-Type": "application/json; charset=utf-8"
             },
             body: JSON.stringify({
                 script_embedded: `https://guarded-anchorage-85319.herokuapp.com/api/surfly/projectData/${projectID}/?timestamp=` + timestamp,
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
             res.status(200).json( response.leader_link )
         })
         .catch(function(error) {
             console.log('error: ');
             console.log(error.message);
         });
 };

export const config = {   api: {     externalResolver: true,   }, }
// Documantation for externalResolver   https://nextjs.org/docs/api-routes/api-middlewares#custom-config