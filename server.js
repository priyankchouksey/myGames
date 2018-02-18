var express   = require('express');        //to install express write "npm install express"
var app = express();
app.use(express.static('./public'));
app.get('/',function(req,res){

 res.sendFile('./index.html');

});
app.listen(process.env.PORT || 3000, function () {
    console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
  })