const express = require("express");
var mongo = require("mongodb");
var url =
  "mongodb+srv://trash-user:codedownforwhat@cluster0-0p8w9.mongodb.net/test?retryWrites=true&w=majority";

var MongoClient = require("mongodb").MongoClient;

const app = express();

//GET DOCUMENTS
app.get("/api/get-documents", function(req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("parent-resources");
    var query = {};
    dbo
      .collection("resources")
      .find(query)
      .toArray(function(err, docs) {
        if (err) throw err;
        res.json(docs);
        db.close();
      });
  });
});

//GET SURVEYS
app.get("/api/get-surveys", function(req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("parent-resources");
    var query = {};
    dbo
      .collection("surveys")
      .find(query)
      .toArray(function(err, docs) {
        if (err) throw err;
        res.json(docs);
        db.close();
      });
  });
});

//GET EXTERNAL
app.get("/api/get-external-resources", function(req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("parent-resources");
    var query = {};
    dbo
      .collection("external")
      .find(query)
      .toArray(function(err, docs) {
        if (err) throw err;
        res.json(docs);
        db.close();
      });
  });
});

const port = 5000;

app.listen(port, () => console.log("server stared on port 5000"));
