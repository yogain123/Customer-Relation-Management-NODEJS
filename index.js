const express = require('express');
var app = express();
const bodyParser = require('body-parser');

var routing = require("./routing");

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.use(express.static('views'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


console.log(`Project Dir ${__filename}`);
console.log(`Project Dir ${__dirname}`);


app.use('/', routing);

app.listen(3333);
