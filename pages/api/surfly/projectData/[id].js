import { connect, ObjectId } from "../../../../utils/database";

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
        const jsResult    = `${data.js}` ;
        const cssResult   = ` const style = document.createElement('style'); style.innerHTML =  "  ${data.css} "; document.head.appendChild(style); ` ;
        const fullResult  = jsResult + cssResult   ;
         res.
         setHeader('Content-Type', 'application/javascript') ;         // with res.END we might set the content type to JavaScript
        res.
        send(  fullResult  );
      } catch (error) {
        res.
        status(500).json({ success: false });
      }
};