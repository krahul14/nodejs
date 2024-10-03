const http = require('http');
// const fs = require('fs');
// const url = require('url') 
const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("Welcome to Home Page");
})
app.get('/about',(req,res)=>{
    res.send("Welcome to About Page"+req.query.name + "your age is "+req.query.age);
})

// function myHandler(req,res){
//     if(req.url==='/favicon.ico') return res.end();
//     const log = `${Date.now()}: ${req.method} ${req.url} New Req Recieved\n`;
//     const myUrl = url.parse(req.url,true);
//     // console.log(myUrl);
//     fs.appendFile('log.txt',log, (err,data)=>{
//         switch(myUrl.pathname){
//             case '/': 
//             if(req.method === 'Get'){
//             res.end("Welcome to Home Page");}
//             break;
//             case '/about':
//             const userName = myUrl.query.myname;
//             res.end(`Welcome to About Page ${userName}`);    
//             // res.end("Welcome to About Page");
//             break;
//             case '/signup':
//                 if(req.method === 'GET'){
//                     res.end('This is sign up form')}
//                 else if(req.method === 'POST'){
//                     // DB Query
//                     res.end('Data Saved Successfully');}
//             default: res.end("404 Page Not Found");
//         }
//     })
//     // console.log(req);
//     // console.log(req.headers);
//     console.log("New Req Rec.")
// }
// const myServer = http.createServer(app);

// myServer.listen(8000,()=>console.log("Server is listening on port 8000")); 

app.listen(8000,()=>console.log("Server is listening on port 8000"));