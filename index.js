const express = require('express')
const app  = express()
const port = 3001
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use((req, res, next) => {
     // Website you wish to allow to connect
     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

     // Request methods you wish to allow
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
 
     // Request headers you wish to allow
     res.setHeader('Access-Control-Allow-Headers', 'application/json, content-type');
 
     // Set to true if you need the website to include cookies in the requests sent
     // to the API (e.g. in case you use sessions)
     res.setHeader('Access-Control-Allow-Credentials', true);
 
     // Pass to next layer of middleware
     next();
})

let tvShowsArray = [] 

app.post('/', (req, res) => {
   tvShowsArray = [...tvShowsArray, req.body]
   console.log(req.body)
   res.send(tvShowsArray)
})





app.listen(port, () => console.log('running on port 3001'))