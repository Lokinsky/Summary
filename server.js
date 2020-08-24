const express = require('express');
var server = express();
server.use(express.static(__dirname+'/public/'));
//server.use(express.static(__dirname+'/store/'));
//server.use(express.static(__dirname+'/dist/'));


server.get('/',(req,res)=>{
    res.sendFile(__dirname+"/public/html/index.html",(err)=>{
        //console.log(err)
    })
})

server.get('/login',(req,res)=>{
    res.redirect('/');
})


server.listen(3001,'192.168.1.101',()=>{
    //console.log('server is running..');
});
