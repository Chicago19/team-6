const express = require("express");

const app = express();

app.get("/api/boilerplate", (req, res) => {
  const hello = "hello world";

  res.json(hello);
});

const port = 5000;

app.listen(port, () => console.log("server stared on port 5000"));
