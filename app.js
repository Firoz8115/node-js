
const express = require("express");
const app = express();
const port = 3001;

app.get("/userId/:id/userAge/:age", (req,res) =>{
    const id = req.params.id;
    const age = req.params.age;
    res.send("student id is :" + (id) + " student age is :" + (age));
   //res.end('<h1> this is a my first server ');
});

app.listen(port,() =>{
    console.log('server is running at http://localhost:' + (port));
}); 



















