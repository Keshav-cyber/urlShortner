const express = require('express');
var bodyParser = require('body-parser');
const route = require('./routes/route.js');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://Keshav-cyber:7LizqrsG6tL39fuT@cluster0.ohm0bak.mongodb.net/group25Database?retryWrites=true&w=majority", { useNewUrlParser: true })
    .then(() => console.log('mongodb running on cluster ✔'))
    .catch(err => console.log(err))


app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port 🎧' + (process.env.PORT || 3000))
});
