// Basic server by using http,createServer.
//const  http=require('http');
// http.createServer((req,resp)=>{
//     resp.write("<h1>Hello This is sanju</h1>");
//     resp.end();

// }).listen(3500);
// const http=require('http');
// function dataControl(req,resp){
//     resp.write("<h1>Hello I am study Node js</h1>");
//     resp.end();
// }
// http.createServer(dataControl).listen(3000);
    
//Arrow function wise wise

const http=require('http');
const dataControl = (req,resp)=>
{
    resp.write("<h1>Hello I am study Node js</h1>");
    resp.end();
}
http.createServer(dataControl).listen(300);
    


