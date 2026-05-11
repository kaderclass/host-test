const express = require("express");
const app = express();

app.get("*", (req, res) => {
  res.json({
    host: req.headers.host,
    url: req.url
  });
});

app.listen(3000);
