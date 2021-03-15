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
        const cssResult   = ` ; const User_Input_Style = document.createElement('style'); style.innerHTML =   ' ${data.css}    ' ; document.head.appendChild(User_Input_Style); ` ;
        const cssScrollBar   = ` ; const ScrollBarStyle = document.createElement('style'); style.innerHTML =   ' #::-webkit-scrollbar{width:9px}::-webkit-scrollbar-track{box-shadow:inset 0 0 5px grey;border-radius:30px;margin-top:5px;margin-bottom:5px}::-webkit-scrollbar-thumb{background:#a9a9a9;border-radius:60px}::-webkit-scrollbar-thumb[_ss_hover]{background:#a9a9a9}    ' ; document.head.appendChild(ScrollBarStyle); ` ;
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