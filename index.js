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


const createInstance = (method, data) => {
  return instance.connect((err, client) => {
      if(err) err
      const collection = client.db("tvdemo").collection("tvdemo")
   switch(method){
   case 'insertOne': 
       return collection.insertOne(data)
       break
      case 'find':
       console.log(collection.find().toArray())
       break
      default: 
      return
   }
})
}




app.post('/tvDemo', (req, res)=> {
console.log(createInstance('insertOne', req.body))
res.send('success')

   // instance.connect((err) => {
   //    if(err) res.send(err)
   //    const collection = client.db("tvdemo").collection("tvdemo")
   //    collection.insertOne(req.body).then(r => res.send(r.ops))
   // })


   // instance.connect((err, client) => {
   //    if(err) res.send(err)
   //    const collection = client.db("tvdemo").collection("tvdemo")
   //    collection.insertOne(req.body).then(r => res.send(r.ops))
   //    db.close()
   // })
})
   app.get('/getAllTvShows', async (req, res) => {
      try{
         let find = await createInstance('find')
         res.send(find)
        }catch(e){
      console.log(e)
      }
     

      // instance.connect((err, client)  => {
      //    if(err) res.send(err)
      //  const collection = client.db("tvdemo").collection("tvdemo")
      //  collection.find().toArray().then(r => res.send(r))
      // //  .toArray().then(r => res.send(r))
      // //  db.close()
      // }) 
})
app.get('/findShowWithId/:id', (req, res) => {
   collection.findOne({_id: req.params.id}).then((data) => {
      res.send(data)
      db.close()
   })
})





app.listen(port, () => console.log('running on port 3001'))