const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('../src/routes')


const app = express();
port = 8000
app.use(bodyParser.json());
app.use('/',routes)

const mongoDb = "mongodb://localhost:27017/mydb"

mongoose.connect(mongoDb, {
    useNewUrlParser : true,
    useUnifiedTopology: true
}).then(success =>{
    console.log("Successfully connected to mongoDb");
    app.listen(port, () =>{
        console.log("server is running", port);
    })
}).catch(error =>{
    console.log("err in Db connection");
})