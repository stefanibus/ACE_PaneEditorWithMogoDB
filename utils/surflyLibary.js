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


 	}
}

export default surflyProxy