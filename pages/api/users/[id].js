import { connect, ObjectId } from "../../../utils/database";

export default async (req, res) => {
    const {
        query: { id },
        method,
    } = req;
    const collectionName = "pensName";
    let filterValue =  {};
    if (id == 'admin') { // console.log('display all Projects because id  equals admin: ', id ) // console.log('filterValue ', filterValue)         //https://docs.mongodb.com/manual/reference/method/db.collection.find/
    } else { // console.log('id  equals userID: ', id ) // console.log('filterValue ', filterValue)
        filterValue =  {userID: id}
    }
    switch (method) {
    case "GET":
        try {
            const { db } = await connect();
            const data = await db.collection(collectionName).find(filterValue).toArray();
            res.status(200).json({ data });
            // console.log('api/users/id.js: GET Users-Data (for DropDown?) successfully');
        } catch (error) {
            res.status(500).json({ success: false });
        }
        break;
    }

};
