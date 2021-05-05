const surflyProxy = {
 	embedLibary: () => {
		// EXTERNAL SURFLY LIBARY will be loaded
		// in order to minimize unnessesary reloading
		// console.log('surfly Libary will be loaded ');
          (function (s, u, r, f, l, y) {
            s[f] = s[f] || {
              init: function () {
                s[f].q = arguments;
              }
            };
            l = u.createElement(r);
            y = u.getElementsByTagName(r)[0];
            l.async = 1;
            l.src = "https://surfly.com/surfly.js";
            y.parentNode.insertBefore(l, y);
          })(window, document, "script", "Surfly");
          // console.log('embedLibary')
 	},
   surflyRender: async (projectId, setpaneValues) => {

            const serverURL = process.env.NEXT_PUBLIC_PRODURL;


               // console.log('projectId : ',  projectId)
            var timestamp = Date.now();
            if (projectId == "" || projectId == " " ) {
                alert('Please create a project before you click on SAVE.');
            } else {
                const SurflyAPIstring = `${serverURL}/api/proxyService/${projectId}/?timestamp=`+timestamp;
                // console.log('SurflyAPIstring with projectId and TimeStamp: ',SurflyAPIstring);
                const fetchRequestOptions = { method: "GET", headers: { "Content-Type": "application/json; charset=utf-8" } };
                const getSurflyURL = await fetch(SurflyAPIstring, fetchRequestOptions);
                const { SurflyResponseURL } = await getSurflyURL.json();
                if (getSurflyURL.status !== 200) { await router.push("/404"); }
                setpaneValues(SurflyResponseURL);
            }
   }
}

export default surflyProxy