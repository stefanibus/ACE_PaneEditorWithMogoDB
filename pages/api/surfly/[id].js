// CALL THIS FILE LIKE SO
// <script id="demo" src="http://localhost:3000/api/surfly/604a14869e030b0015714a6f"></script>
// <script id="demo" src="http://localhost:3000/api/surfly/:ProjectID"></script>


import { connect, ObjectId } from "../../../utils/database";
// import    "../test";

export default async (req, res) => {

  const ScrollBarDesign =
  `
 // Scrollbar design
 const externalCSS = document.createElement('link');
 externalCSS.id = "dynamic-externalCSS";
 externalCSS.href = 'https://www.make-mobile.de/customers/universal/comparison/stylesheets/scrollbar_nachherStyling.css';
 externalCSS.setAttribute('rel', 'stylesheet');
 externalCSS.type = 'text/css';
 externalCSS.async = false; // <-- this is important
 document.getElementsByTagName('head')[0].appendChild(externalCSS);
 `

  const collectionName = "pensName";
  const { id } = req.query
      try {
        const { db } = await connect();
        const data = await db
          .collection(collectionName)
          .findOne({ _id: ObjectId(id) });
        if (!data) {
          res.status(404).json({ success: false });
        }
        const jsResult    =
`
${data.js}
`
;
        const cssResult   =
`
document.head.insertAdjacentText("beforeend",  "<style>${data.css}</style>");
`
;
        // https://stackoverflow.com/questions/524696/how-to-create-a-style-tag-with-javascript/28662118#28662118
        const fullResult  = jsResult + cssResult   ;
         res.
         setHeader('Content-Type', 'application/javascript') ;
        // res.setHeader.contentType('text/javascript') ;
        // we use res.END here not res.send  because we want to be able to set the content type to JavaScript
        res.
        send(ScrollBarDesign + fullResult  );
      } catch (error) {
        res.
        status(500).json({ success: false });
      }
};