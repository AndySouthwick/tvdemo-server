const express = require('express')
const app  = express()
const port = 3001
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:passwordone@cluster0-khw7n.mongodb.net/test?retryWrites=true&w=majority";
const instance = new MongoClient(uri, { useNewUrlParser: true,  useUnifiedTopology: true});
app.use(bodyParser.json())

app.use((req, res, next) => {
     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
     res.setHeader('Access-Control-Allow-Headers', 'application/json, content-type');
     res.setHeader('Access-Control-Allow-Credentials', true);
     next();
})



instance.connect((err, client) => {
   const collection = client.db("tvdemo").collection("tvdemo")
   app.post('/tvDemo', (req, res)=> {
   })
   app.get('/getAllTvShows', async (req, res) => {
      const data = await collection.find().toArray()
      res.send(data)
      // instance.connect(async (err, client)  => {
      //    if(err) res.send(err)
      //  const collection = client.db("tvdemo").collection("tvdemo")
      //  const data = await collection.find().toArray()
      //  console.log(data)
      //  res.send(data)
      // }) 
})
   app.get('/findShowWithId/:id', (req, res) => {
      collection.findOne({_id: req.params.id}).then((data) => {
         res.send(data)
         db.close()
      })
   })
})




app.listen(port, () => console.log('running on port 3001'))