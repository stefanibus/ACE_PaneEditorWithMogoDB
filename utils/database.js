import { MongoClient, ObjectId } from "mongodb";
const dotenv = require("dotenv");
dotenv.config();
const dbName = process.env.DBNAME;
const url = process.env.URL;

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connect() {
  if (!client.isConnected()) await client.connect();
    const db = client.db(dbName);
    console.log('mongo was requested ' + Date.now())
  return { db, client };
}

export { connect, ObjectId };