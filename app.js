const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.render("Hello, world!");
})

app.listen(PORT, () => {
    console.log("App listening at http://localhost:${PORT}");
})