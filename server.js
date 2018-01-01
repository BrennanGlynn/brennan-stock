const express = require("express");

const app = express();
const port = process.env.PORT || 8080;

app.get("/api/hello", (req, res) => {
    res.send({ express: "Hello from express"});
});

//Serve react app
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname+"/client/build/index.html"));
});

app.listen(port, () => console.log(`Listening on ${port}`));