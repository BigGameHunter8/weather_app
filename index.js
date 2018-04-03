// var http =require('http');

// var BaseModel =require(`./BaseModel`);

// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/html'});
//     BaseModel.sendRequests();
    
// }).listen(3000);

var express =require('express');

var app = express();

app.get('/',function(req,res){
    res.send('Hello');
});

app.listen(3000, function(){
    console.log('example app');
});