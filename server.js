var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.json({ip: req.headers["x-forwarded-for"], language: req.headers["accept-language"].split(",",1)[0], 
    system: req.headers["user-agent"].split("(",2)[1].split(")",1)[0]});
})

app.listen(process.env.PORT || 8080, function () {
  console.log('Example app listening on port 8080!')
})