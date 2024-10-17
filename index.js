const express = require("express");

const cors = require("cors");
const { default: axios } = require("axios");
const app = express();
app.use(cors());
app.use("/", express.static(__dirname + "/build"));

app.get("/trancer-proxy", async (req, res) => {
  try {
    const result = await axios.get(`http://localhost:8080${req.query.url}`, {
      headers: {
        Authorization: req.headers.authorization,
      },
    });
    return res.send(result.data);
  } catch (e) {
    return res.status(e.status).send(e.data?.data);
  }
});

app.get("*", (_, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(3000, () => {
  console.log("Server listening");
});
