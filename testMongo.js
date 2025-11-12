const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://jcamacho27_db_user:5AaGmn3J92fbn53T@cluster0.7jje6ty.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("✅ Pinged your deployment. Connected to MongoDB!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
