const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./app.js');
const md5 = require('md5')
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/greetings", (req, res)=>{
    res.send("Hello again")
   })
   
   app.get("/:id/:name", function(req, res, next)
   {
   res.send(`The id you specified is ${req.params.id}and thee name is ${req.params.name}`)
   // res.json({"message":"Hello"})
   });

// Root endpoint
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});
app.listen(PORT,()=>{console.log(`The app is running on port ${PORT} `)})

app.get("/api/users", (req, res, next) => {
    var sql = "select * from user"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
});

//single user
app.get("/api/user/:id", (req, res, next) => {
    var sql = "select * from user where id = 2"
    var params = [req.params.id]
    db.get(sql, params, (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":row
        })
      });
});

//Post
app.post("/api/user/", (req, res, next) => {
    var errors=[]
    if (!req.body.password){
        errors.push("No password specified");
    }
    if (!req.body.email){
        errors.push("No email specified");
    }
    if (errors.length){
        res.status(400).json({"error":errors.join(",")});
        return;
    }
    var data = {
        name: req.body.name,
        email: req.body.email,
        password : md5(req.body.password)
    }
    var sql ='INSERT INTO user (name, email, password) VALUES (?,?,?)'
    var params =[data.name, data.email, data.password]
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": data,
            "id" : this.lastID
        })
    });
})

