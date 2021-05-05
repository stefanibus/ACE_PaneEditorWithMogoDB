import { connect, ObjectId } from "../../../../utils/database";

export default async (req, res) => {
  const collectionName2 = "pensName";
  const { id } = req.query


  // console.log('okay logged to console')
  // return  res.send(  'collectionName2 = ' + collectionName2 + ' id = ' + id + '.   okay That is all folks.'  );

      try {
        const { db } = await connect();
        const data = await db
          .collection(collectionName2)
          .findOne({ _id: ObjectId(id) });
        if (!data) {
          // stop further execution in this callback
          return res.status(404).json({ success: false });

        }
          res.setHeader('Content-Type', 'application/javascript') ;
          let longUrlResponse = data.longurl
          // console.log('SURFLY GET LongURL-STRING successfully');
          // stop further execution in this callback
          return  res.send(  {longUrlResponse}  );

      } catch (error) {
          // stop further execution in this callback
          return res. status(500).json({ success: false });

      }
};
