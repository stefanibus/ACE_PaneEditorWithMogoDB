import { connect, ObjectId } from "../../../utils/database";

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
          res
            .status(404)
            .json({
              success: false,
              info: "GET ==>  error 404: While this projectQuery-ID seems to have the correct amount of digits (which is a single String of 12 bytes), it seems to not exist in the database (anymore). The Project does not exist (anymore). This Project might have been deleted from the Database! ",
            });
          return;
        } else {
          res.status(200).json({ data });
          // console.log('api/proxyProjectData/id.js: GET Project-Data successfully');
          return;
        }
      } catch (error) {
        console.log("error: ", error);
        res
          .status(500)
          .json({
            success: false,
            info: "GET => error 500: The projectQuery-ID must be a single String of 12 bytes exactly. Probably this projectQuery does contain a mistaken amount of digits.",
          });
        return;
      }
      break;

    case "PUT":
      try {
        const { css, js, userID, projectName, longurl } = req.body;
        const { db } = await connect();

        const result = await db.collection(collectionName).insertOne({
          css,
          js,
          userID,
          projectName,
          longurl,
        });
        res
          .status(200)
          .json({ success: true, data: { newRecordId: result.insertedId } });
        // console.log('api/proxyProjectData/id.js: PUT Project-Data successfully');
        return;
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, data: "PUT error on line 52" });
        return;
      }
      break;
    case "POST":
      try {
        const { css, js, id, userID, projectName, longurl } = req.body;
        const { db } = await connect();

        await db
          .collection(collectionName)
          .updateOne(
            { _id: ObjectId(id) },
            {
              $set: {
                css: css,
                js: js,
                userID: userID,
                projectName: projectName,
                longurl: longurl,
              },
            }
          );
        //  SEE LOADING INTERFACE by LONG-LOADING-TIME FAKED:    // await  new Promise((resolve) => {  setTimeout(() => resolve(), 4000);  });
        res.status(200).json({ success: true, data: { updatedRecord: true } });
        // console.log('api/proxyProjectData/id.js: POST Project-Data successfully');
        return;
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, data: "POST error on line 76" });
        return;
      }
      break;
    default:
      res.status(400).json({ success: false, data: "default" });
      break;
    case "DELETE":
      try {
        const { db } = await connect();
        const data = await db
          .collection(collectionName)
          .deleteOne({ _id: ObjectId(id) });
        res.status(200).json({ success: true, data });
        // console.log('api/proxyProjectData/id.js: DELETE Project-Data successfully');
        return;
      } catch (error) {
        console.log(error);
        res
          .status(500)
          .json({ success: false, data: "DELETE error on line 95" });
        return;
      }
      break;
  }
};
