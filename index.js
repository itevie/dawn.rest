const express = require("express");

const cors = require("cors");
const app = express();
app.use(cors());
app.use("/", express.static(__dirname + "/build"));

app.get("*", (_, res) => {
    res.sendFile(__dirname + "/build/index.html");
});

app.listen(3000, () => {
    console.log("Server listening");
});