const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;

// Serve stic files from React app
app.use(express.static(path.join(__dirname, "client/build")));

app.get("/api/hello", (req, res) => {
    res.json({express: "hello from express"});
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(port);
console.log(`Server listening on port ${port}.`);