const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;

app.get("/api/hello", (req, res) => {
    res.send({ express: "Hello from express"});
});

app.use("/static", express.static(path.join(__dirname, "client/build")));

// Serve static assets
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port, () => console.log(`Listening on ${port}`));