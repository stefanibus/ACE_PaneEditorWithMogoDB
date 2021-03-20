
// EXTERNAL SURFLY LIBARY WILL NOT be loaded from here and thus not called this way in app.js in the head
// in order to minimize unnessesary reloading: We call it from a UseEffect Hook in index.js


// compressed version
//       // Surfly Libary cannot be loaded inside of app.js like so:       <script>!function(e,t,n,r,s,c){e[r]=e[r]||{init:function(){e[r].q=arguments}},s=t.createElement(n),c=t.getElementsByTagName(n)[0],s.async=1,s.src="https://surfly.com/surfly.js",c.parentNode.insertBefore(s,c)}(window,document,"script","Surfly");</script>


// Surfly Libary cannot be loaded inside of app.js like so:       <script>!function(e,t,n,r,s,c){e[r]=e[r]||{init:function(){e[r].q=arguments}},s=t.createElement(n),c=t.getElementsByTagName(n)[0],s.async=1,s.src="https://surfly.com/surfly.js",c.parentNode.insertBefore(s,c)}(window,document,"script","Surfly");</script>
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
