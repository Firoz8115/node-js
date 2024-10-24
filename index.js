const http = require("http");

const myServer = http.createServer((req, res) =>{
    res.end("Hello I Am Your First Server Is Here:");
});

myServer.listen(3000, () =>{
    console.log("server is here");
});