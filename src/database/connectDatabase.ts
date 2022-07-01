
import { connect } from "mongoose";

export const connectDatabase = async () => {
    await connect(process.env.MONGO_URI as string);
    console.log("Database Connected!")
}

/*
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://<username>:<password>@roma.mvxagee.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(MongoClient => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();"mongodb+srv://new_userUKRAINE:Jaw0mxsvPgDEpYe3@roma.mvxagee.mongodb.net/?retryWrites=true&w=majority"
});"mongodb+srv://new_userUKRAINE:Jaw0mxsvPgDEpYe3@roma.mvxagee.mongodb.net/?retryWrites=true&w=majority"
*/