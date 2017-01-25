var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname,"./client")));
app.use(express.static(path.join(__dirname,"./node_modules")));

require("./Server/config/mongoose.js");
require("./Server/config/routes.js");

//start the server
app.listen(8000, function(){
  console.log('listening on port 8000');
});