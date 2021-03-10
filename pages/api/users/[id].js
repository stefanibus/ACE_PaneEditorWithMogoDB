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
                const data = await db.collection(collectionName).find({ userID: id }).toArray();
                res.status(200).json({ data });
            } catch (error) {
                res.status(500).json({ success: false });
            }
            break;
    }
};
