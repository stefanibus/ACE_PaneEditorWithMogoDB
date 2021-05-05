//  import { connect, ObjectId } from "../../../../utils/database";

export default async (req, res) => {
  const collectionName2 = "pensName";
  const { id } = req.query


  console.log('okay logged to console')
  return  res.send(  'collectionName2 = ' + collectionName2 + ' id = ' + id + '.   okay That is all folks'  );

      // try {
      //   const { db } = await connect();
      //   const data = await db
      //     .collection(collectionName2)
      //     .findOne({ _id: ObjectId(id) });
      //   if (!data) {
      //     res.status(404).json({ success: false });
      //     // stop further execution in this callback
      //     return;
      //   }
      //    res.setHeader('Content-Type', 'application/javascript') ;
      //   let longUrlResponse = data.longurl
      //   res.send(  {longUrlResponse}  );
      //   // console.log('SURFLY GET LongURL-STRING successfully');
      // } catch (error) {
      //   res.
      //   status(500).json({ success: false });
      //   // stop further execution in this callback
      //   return;
      // }
};
