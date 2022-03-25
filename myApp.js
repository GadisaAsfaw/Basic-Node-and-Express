//11- Use body-parser to Parse POST Requests
//require
var bodyParser = require("body-parser");
var express = require('express');
var app = express();

//11- Use body-parser to Parse POST Requests
//Mounting body-parser
app.use(bodyParser.urlencoded({extended: false}));
//1- Meet the Node console
console.log("Hello World");

//7- Implement a Root-Level Request Logger Middleware
app.use((req,res,next)=>{
  console.log(req.method+" "+req.path+" - "+req.ip);
  next();
});

//3- Serve an HTML File
app.get("/",(req,res)=>{
  res.sendFile(__dirname + "/views/index.html" );
});

//2- Start a Working Express Server
app.get("/",(req,res)=>{
res.send("Hello Express");
});


//4- Serve Static Assets
app.use("/public",express.static(__dirname + "/public"));

//5- Serve JSON on a Specific Route
//6- Use the .env File
app.get("/json",(req,res)=>
  { 
    if(process.env.MESSAGE_STYLE=="uppercase"){
      res.json({
        "message": "HELLO JSON"
      });
    }
    res.json({"message": "Hello json"});
  });

//8- Chain Middleware to Create a Time Server
app.get("/now",
        (req,res,next)=>{
          req.time = new Date().toString();
          next();
        },
        (req,res)=>{
          res.json({time:req.time});
        });
//9- Get Route Parameter Input from the Client
app.get("/:word/echo",(req,res)=>{
  res.json({echo:req.params.word});
});
//10- Get Query Parameter Input from the Client
app.get("/name",(req,res)=>{
    var firstName = req.query.first;
  var lastName = req.query.last;
  res.json({
    name: `${firstName} ${lastName}`
  });
  
})
//12- Get Data from POST Requests
app.post("/name",(req,res)=>{
  var string = req.body.first + " " + req.body.last;
  res.json({ name: string });
});



































 module.exports = app;
