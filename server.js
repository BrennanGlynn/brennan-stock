const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;

app.get("/api/hello", (req, res) => {
    res.send({ express: "Hello from express"});
});

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on ${port}`));