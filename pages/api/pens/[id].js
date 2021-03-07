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
        const { html, css, js } = req.body;
        const { db } = await connect();

        const result = await db.collection(collectionName).insertOne({
          html,
          css,
          js,
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
        const { html, css, js, id } = req.body;
        const { db } = await connect();

        await db
          .collection(collectionName)
          .updateOne(
            { _id: ObjectId(id) },
            { $set: { html: html, css: css, js: js } }
          );
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
  }
};




















































































// // import { connect, ObjectId } from "../../../utils/database";
// // # OR fake db
// import { connect, ObjectId } from "../../../utils/fake-Database";


// export default async (req, res) => {

//   const {
//     query: { id },
//     method,
//   } = req;
//   switch (method) {
//     // case "PUT":
//     //   const randomId = Math.floor(Math.random() * (100 - 1) + 1);
//     //   // //FAKE A LONG  LOADING TIME  IN ORDER TO SEE THE LOADING INTERFACE TESTWISE
//     //   // await new Promise((resolve) => {  setTimeout(() => resolve(), 4000);  });
//     //   res
//     //     .status(200)
//     //     .json({ success: true, data: { newRecordId: randomId } });
//     //   break;


//   case "PUT":
//       try {
//         const { html, css, js } = req.body;
//         const { db } = await connect();

//         const result = await db.collection(collectionName).insertOne({
//           html,
//           css,
//           js,
//         });
//         res
//           .status(200)
//           .json({ success: true, data: { newRecordId: result.insertedId } });
//       } catch (error) {
//         console.log(error);
//         res.status(400).json({ success: false });
//       }
//     break;



//     // case "POST":
//     //   // //FAKE A LONG  LOADING TIME  IN ORDER TO SEE THE LOADING INTERFACE TESTWISE
//     //   // await  new Promise((resolve) => {  setTimeout(() => resolve(), 4000);  });
//     //   res.status(200).json({ success: true, data: { updatedRecord: true } });
//     //   break;

//     case "POST":
//         try {
//           const { html, css, js, id } = req.body;
//           const { db } = await connect();

//           await db
//             .collection(collectionName)
//             .updateOne(
//               { _id: ObjectId(id) },
//               { $set: { html: html, css: css, js: js } }
//             );
//           res
//             .status(200)
//             .json({ success: true, data: { updatedRecord: true } });
//         } catch (error) {
//           console.log(error);
//           res.status(400).json({ success: false });
//         }
//       break;




//     // case "GET":
//     //   const data = {
//     //     html: `<div>hello from pen ${id}</div>`,
//     //     css: `div { color: blue}`,
//     //     js: `console.log("hi there")`,
//     //   };
//     //   // //FAKE A LONG  LOADING TIME  IN ORDER TO SEE THE LOADING INTERFACE TESTWISE
//     //   // await new Promise((resolve) => {  setTimeout(() => resolve(), 4000);  });
//     //   res.status(200).json({ data });
//     //   break;

//     case "GET":
//       try {
//         const { db } = await connect();
//         const data = await db
//           .collection(collectionName)
//           .findOne({ _id: ObjectId(id) });
//         if (!data) {
//           res.status(404).json({ success: false });
//         }
//         res.status(200).json({ data });
//       } catch (error) {
//         res.status(500).json({ success: false });
//       }
//     break;




//     default:
//       res.status(400).json({ success: false, data: "default" });
//       break;
//   }
// };