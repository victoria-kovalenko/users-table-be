import express from 'express';
import cors from 'cors';
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://victoriakovalenkojob:Vv0820132525@cluster0.svj5c27.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect((err: any) => {
  const collection = client.db("thinkmobiles_tt").collection("users");
  // perform actions on the collection object
  if (!err) {
    console.log('connect');
  } else {
    console.log(err);
  }

});


const app = express();

app.use(cors());

app.get('/', (req: any, res: any) => {
  console.log(req.params);
  res.send('hello world');

  res.end();
});

// const schema = {
//   properties: {
//     _id: 'string',
//     name: 'string',
//     email: 'string',
//     phone: 'string',
//     count: 'string',
//     next: 'string',
//   },
//   primaryKey: '_id'
// };

// const monmodel = mongoose.model("users", schema);

app.post('/users', express.json(), async (req: any, res: any) => {
  const data = {
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    count: req.body.count,
    next: req.body.next,
  };

  // db.collection('users').insertOne(data, (err:any, result:any) => {
  //   if (err) {
  //     res.send({ 'error': 'An error has occurred' });

  //     return;
  //   }
  // });

  // res.status(204);
  // res.end();
  client.connect((err: any) => {
    const collection = client.db("thinkmobiles_tt").collection("users");
    // perform actions on the collection object
    if (!err) {
      console.log('connect');
    } else {
      console.log(err);
    }

     const db = client.db('thinkmobiles_tt');

    db.collection('users').insertOne(data, (err: any, result: any) => {
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
