
const http = require("http");
const fs = require("fs");


const server = http.createServer((req,res) =>{
   if(req.url === '/'){
     fs.readFile("index.html", (err,data) =>{
        res.writeHead(200, {"content-type": "text/html"});
        res.write(data);
        res.end();
     });
   }

   else if(req.url === '/'){
    fs.readFile("index.html", (err,data) =>{
       res.writeHead(200, {"content-type": "text/html"});
       res.write(data);
       res.end();
    });
  }
});
server.listen(3000, () =>{
    console.log('server is running at http://' )
});

