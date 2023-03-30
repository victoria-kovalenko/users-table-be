import express from 'express';
import cors from 'cors';
import { ObjectId } from 'mongodb';
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://victoriakovalenkojob:Vv0820132525@cluster0.svj5c27.mongodb.net/?retryWrites=true&w=majority" || process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});
client.connect((err: any) => {
  const collection = client.db("thinkmobiles_tt").collection("users");
  if (!err) {
    console.log('connect');
  } else {
    console.log(err);
  }

});

const PORT = process.env.PORT || 3030 ;


const app = express();

app.use(cors());

app.get('/users', async (req: any, res: any) => {
  await client.connect((err: any) => {
    const collection = client.db("thinkmobiles_tt").collection("users");
    collection.find({}).toArray(function (err, docs) {
      res.send(docs);

      res.end();
    });
  });
});

app.get('/users/:userId', async (req: any, res: any) => {
  const { userId } = req.params;

  await client.connect((err: any) => {
    const collection = client.db("thinkmobiles_tt").collection("users");
    collection.find({_id: ObjectId(userId)}).toArray(function (err, docs) {
      res.send(docs);

      res.end();
    });
  });
})

app.patch('/users/:userId', express.json(), async (req: any, res: any) => {
  const { userId } = req.params;
  let count;
  const data = {
    title: req.body.title,
    description: req.body.description,
    start: req.body.start,
    end: req.body.end,
  };

  await client.connect(async (err: any) => {
    const collection = await client.db("thinkmobiles_tt").collection("users");
    collection.find({ _id: ObjectId(userId) }).toArray(function (err, docs) {
      let previousCount = 1;
      if (docs[0] && docs[0].count != null) {
        previousCount = 1 + (+docs[0].count);
      }
      const count = previousCount.toString();

      collection.updateOne(
        { _id: ObjectId(userId) },
        { $set: { ...data, count } },
        { upsert: true },
        function (err, result) {
          res.end();
        }
      );
    });
  });
})

app.post('/user', express.json(), async (req: any, res: any) => {
  const data = {
    id: req.body.id,
    name: req.body.name,
    surname: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  };

  await client.connect((err: any) => {
    const collection = client.db("thinkmobiles_tt").collection("users");
    collection.insertOne(data, (err: any, result: any) => {
    if (err) {
      res.send({ 'error': 'An error has occurred' });

      return;
    }
  });
    res.send(data);
    res.end();

    client.close();
  });

})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
