const express = require("express");
const path = require("path");

const app = express();

const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, "client/build")));


app.get("/sayHello", function(req, res) {
  res.send("Hello from the back-end.");
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port);
