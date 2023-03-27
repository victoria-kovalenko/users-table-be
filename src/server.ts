import express from 'express';
import cors from 'cors';
import { ObjectId } from 'mongodb';
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://victoriakovalenkojob:Vv0820132525@cluster0.svj5c27.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect((err: any) => {
  const collection = client.db("thinkmobiles_tt").collection("users");
  if (!err) {
    console.log('connect');
  } else {
    console.log(err);
  }

});


const app = express();

app.use(cors());

app.get('/users', (req: any, res: any) => {
  client.connect((err: any) => {
    const collection = client.db("thinkmobiles_tt").collection("users");
    collection.find({}).toArray(function (err, docs) {
      console.log("Found the following records");
      res.send(docs);

      res.end();
    });
  });
});

app.get('/users/:userId', (req: any, res: any) => {
  const { userId } = req.params;

  client.connect((err: any) => {
    const collection = client.db("thinkmobiles_tt").collection("users");
    collection.find({_id: ObjectId(userId)}).toArray(function (err, docs) {
      console.log("Found the following record");
      res.send(docs);

      res.end();
    });
  });
})

app.post('/users', express.json(), async (req: any, res: any) => {
  const data = {
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    count: req.body.count,
    next: req.body.next,
  };

  client.connect((err: any) => {
    const collection = client.db("thinkmobiles_tt").collection("users");
    collection.insertOne(data, (err: any, result: any) => {
    if (err) {
      res.send({ 'error': 'An error has occurred' });

      return;
    }
  });

  res.status(204);
  res.end();

    client.close();
  });

})

app.listen(3000, () => {
  console.log('http://localhost:3000/');
});
