const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const controller = require("./controllers/task_controller");
const app = express()
const port = process.env.PORT | 3000

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())

app.use(controller);

mongoose.connect('mongodb+srv://manuel:admin@cluster0.nzxta.mongodb.net/task_bd', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, (err, res) => {
    if(err) throw err;
    console.log("Conectado a la DB");
});

app.listen(port, () => {
  console.log(`API Listening at http://localhost:${port}`)
})