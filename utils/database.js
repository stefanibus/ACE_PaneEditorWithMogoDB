import { MongoClient, ObjectId } from "mongodb";
const dbName = process.env.DBNAME;
const url = process.env.URL;

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connect() {
  if (!client.isConnected()) await client.connect();
    const db = client.db(dbName);
    // console.log('mongo was requested ' + Date.now())
  return { db, client };
}

export { connect, ObjectId };





// ##############################


// import { MongoClient } from 'mongodb'

// let uri = process.env.MONGO_URI
// let dbName = process.env.MONGO_DB

// let promise = null
// let cached = null

// if (!uri) throw new Error('Missing environment variable MONGO_URI')
// if (!dbName) throw new Error('Missing environment variable MONGO_DB')

// export async function connectToDatabase() {
//   if (cached) return cached
//   if (!promise) {
//     promise = MongoClient.connect(uri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//   }
//   const client = await promise
//   const db = await client.db(dbName)
//   cached = {
//     client,
//     db,
//   }
//   return cached
// }
