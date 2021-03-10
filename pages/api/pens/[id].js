import { connect, ObjectId } from "../../../utils/database";
//import { connect, ObjectId } from "../../../utils/fake-Database";

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;
  const collectionName = "pensName";
  switch (method) {
    case "GET":
      try {
        const { db } = await connect();
        const data = await db
          .collection(collectionName)
          .findOne({ _id: ObjectId(id) });
        if (!data) {
          res.status(404).json({ success: false });
        }
        res.status(200).json({ data });
      } catch (error) {
        res.status(500).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const { html, css, js, userID, projectName } = req.body;
        const { db } = await connect();

        const result = await db.collection(collectionName).insertOne({
          html,
          css,
          js,
          userID,
          projectName
        });
        res
          .status(200)
          .json({ success: true, data: { newRecordId: result.insertedId } });
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const { html, css, js, id, userID, projectName } = req.body;
        const { db } = await connect();

        await db
          .collection(collectionName)
          .updateOne(
            { _id: ObjectId(id) },
            { $set: { html: html, css: css, js: js, userID: userID, projectName: projectName } }
          );
          //FAKE A LONG  LOADING TIME  IN ORDER TO SEE THE LOADING INTERFACE TESTWISE // await  new Promise((resolve) => {  setTimeout(() => resolve(), 4000);  });
        res
          .status(200)
          .json({ success: true, data: { updatedRecord: true } });
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false, data: "default" });
      break;
    case "DELETE":
      try {
        const { db } = await connect();
        const data = await db
          .collection(collectionName).deleteOne({ _id: ObjectId(id) });
        res.status(200).json({ success: true, data });
      } catch (error) {
        res.status(500).json({ success: false });
      }
      break;
  }
};

