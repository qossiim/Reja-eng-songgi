console.log("Serverni boshlash...");
const express = require("express");
const app = express();
const http = require("http");


// 1 kirish code 

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2 session

// 3 views code 
app.set("wiews", "views");
<<<<<<< HEAD
app.set("wiews" engine", "ejs");
=======
app.set("wiews engine", "ejs");
>>>>>>> 161d4ac (Express framework va bu framework orqali web server quramiz)

// // 4 routing code
// app.get("/hello",function(req,res) {
//     res.end(`<h1> Hello World </h1>`);
// });
//     app.get("/gift",function(req,res) {
//     res.end(`<h1> siz sovgalar bolimidasz </h1>`);
// });

app.post("/harid",(req,res) => {
    console.log(req.body);
    res.json({test:"ok"});      
});


app.get("/",function(req,res) {
    res.render("harid");
});


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function(){
    console.log(`The server is running successfully on port: ${PORT}`);     

}); 
