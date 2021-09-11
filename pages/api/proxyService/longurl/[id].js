import { connect, ObjectId } from "../../../../utils/database";

export default async (req, res) => {
  const collectionName2 = "pensName";
  const { id } = req.query;

  try {
    const { db } = await connect();
    const data = await db
      .collection(collectionName2)
      .findOne({ _id: ObjectId(id) });
    if (!data) {
      return res.status(404).json({ success: false });
    }
    res.setHeader("Content-Type", "application/javascript");
    let longUrlResponse = data.longurl;
    return res.send({ longUrlResponse });
  } catch (error) {
    return res.status(500).json({ success: false });
  }
};
