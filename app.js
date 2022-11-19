//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app= express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){     // browser makes request to get data from server (ex- html , javascript, css )
    res.render('login');
  });


app.get("/home",function(req,res){     // browser makes request to get data from server (ex- html , javascript, css )
  //   res.render('login');
    res.render('home');
  });
  
app.get("/complaint",function(req,res){
    res.render('complaint');
});

app.get("/book",function(req,res){
  res.render('book');
});

app.get("/registration",function(req,res){
  res.render('registration');
});

app.get("/view_complaint",function(req,res){
  res.render('view_complaint');
});

app.get("/view_applicant",function(req,res){
  res.render('view_applicant');
});

app.get("/home_admin",function(req,res){
  res.render('home_admin');
});

app.get("/hostel_support",function(req,res){
  res.render('hostel_support');
});

app.get("/complainAccess",function(req,res){
  res.render('complainAccess');
});

app.listen(4000, function() {
  console.log("Server started on port 4000");
});


