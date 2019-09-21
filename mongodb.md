# Mongodb Information

- database `parent-resources`
    - collections
        - `resources` (just pdfs)
        - `surveys`
        - `external`


## How to query


### Example on querying all available resource pdfs
```javascript
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://trash-user:codedownforwhat@cluster0-0p8w9.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("parent-resources");
  var query = { };
  dbo.collection("resources").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
```