const express = require('express'),
app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: true
}));
// support parsing of application/json type post data

app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data


/* Point static path to dist if you want use your own server
to serve Angular webpage to serve Angular webpage. Need run ng buld */
app.use(express.static(__dirname + '/../dist/part1'));
console.log(__dirname);

var http = require("http").Server(app);
var server = http.listen(5001,function(){
    console.log("listening at 50001")
})

app.post('/login', require('./router/postlogin'));
app.post('/loginafter', require('./router/postloginafter'));