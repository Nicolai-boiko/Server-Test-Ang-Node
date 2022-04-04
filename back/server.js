const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3080;

const users = [];

app.use(bodyParser.json());

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.post("/api/user", (req, res) => {
  const user = req.body.user;
  users.push(user);
  res.send("user addedd");
});

app.get("/", (req, res) => {
  res.sendFile(
    "C:/Users/Deman/Documents/GitHub/Server-Test-Ang-Node/server-test/dist/server-test/index.html"
  );
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
