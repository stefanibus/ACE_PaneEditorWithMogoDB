import { connect, ObjectId } from "../../../../utils/database";

export default async (req, res) => {
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
        const jsResult    = ` ${data.js} ` ;
        const cssUserResult   = "  var cssUserResult =  `"  ${data.css}  " ` ; var head = document.head || document.getElementsByTagName('head')[0]; var scrollBarStyle = document.createElement('style');  head.appendChild(scrollBarStyle);  scrollBarStyle.type = 'text/css';  scrollBarStyle.appendChild(document.createTextNode(cssUserResult)); ";
        const cssScrollBar   = "  var cssScrollbar =  `h1 { background: red; }  ` ; var head = document.head || document.getElementsByTagName('head')[0]; var scrollBarStyle = document.createElement('style');  head.appendChild(scrollBarStyle);  scrollBarStyle.type = 'text/css';  scrollBarStyle.appendChild(document.createTextNode(cssScrollbar)); ";

        const fullResult  = jsResult + cssResult + cssScrollBar   ;
        const surflyInjection  =   fullResult     ;
         res.
         setHeader('Content-Type', 'application/javascript') ;
        res.
        send(  surflyInjection );
      } catch (error) {
        res.
        status(500).json({ success: false });
      }
};








