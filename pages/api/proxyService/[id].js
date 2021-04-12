 export default async (req, res) => {

// dotENV Surfly KEY
     const surflyFetchURL = 'https://surfly.com/v2/sessions/?api_key=' + process.env.SURFLYKEY;
     var timestamp = Date.now();
// projectId from query
     const { query: { id }, method, } = req;
     const projectId = id;
     const requestOptions   = { method: "GET", headers: { "Content-Type": "application/json" }, };



// ENV Vars in DEV and Production
// we have 3 env variables: NODE_ENV  and  DEVURL and PRODURL , all in the .env File
// const serverURL      = process.env.NODE_ENV === "development" ? process.env.DEVURL : process.env.PRODURL;
  const serverURL = 'http://localhost:3000';


// longUrlResponse: will provide the relevant LongURL (for surfly to be proxied)
  const longurlAPI     = `${serverURL}/api/proxyService/longurl/${projectId}` ;
  const response = await fetch(longurlAPI, requestOptions);
  const { longUrlResponse } = await response.json();



// projectDataURL: the Surfly API will request our relevant project Data
// Surfly will request the URL and insert the response into the surfly-proxied page
// projectDataURL will respond with the relevant Code (js / CSS / longURL / SHortURL)
// => this URL will be provided to our Surfly-api-request
  const projectDataURL = `${serverURL}/api/proxyService/proxyProjectData/${projectId}?time=`+timestamp;




// Surfly-API requieres TWO Requests: 1: projectDataURL and 2: longUrlResponse
// 1: the longUrlResponse: Surfly will be provided with the relevant longUrl (that is the page to be proxied)
// 2: the projectDataURL:  Surfly shall request our Server to receive the relevant Data (to be inserted into the proxied page)
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