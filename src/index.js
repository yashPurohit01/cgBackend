const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('../src/routes');
const cors = require('cors');


const app = express();
let port = 7000
app.use(bodyParser.json());

app.use(cors());

app.use('/' , routes)

//const mongoDb = "mongodb+srv://DevYadav:000852@cluster0.c9ave.mongodb.net/emp-details?retryWrites=true&w=majority"
 
const mongoDb = "mongodb+srv://ccherbal:ccherbal12@ccherbal.fbbaa.mongodb.net/ccherbal?retryWrites=true&w=majority"
mongoose.connect(mongoDb, {
    useNewUrlParser : true,
    useUnifiedTopology: true
}).then(success =>{
    console.log("Successfully connected to mongoDb");
    app.listen(port, () =>{
        console.log("server is running", port);
    })
}).catch(error =>{
    console.log(`err in Db connection ${error}`);
})



