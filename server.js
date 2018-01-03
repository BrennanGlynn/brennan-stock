const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;

app.get("/api/hello", (req, res) => {
    res.send({ express: "Hello from express"});
});

// Serve static assets
app.use('/static', express.static(path.join(__dirname, '../client/build')));

app.listen(port, () => console.log(`Listening on ${port}`));