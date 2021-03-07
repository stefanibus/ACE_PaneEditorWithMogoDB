import { MongoClient, ObjectId } from "mongodb";

const dbName = "pensDB";
const url = `mongodb+srv://stefanibus:stefan007@cluster0.91hdr.mongodb.net/test?retryWrites=true&w=majority`;

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connect() {
  if (!client.isConnected()) await client.connect();
    const db = client.db(dbName);
  return { db, client };
}

export { connect, ObjectId };