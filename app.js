const express = require("express");
const app = express();
const port = 3000;
const routeAPI = require(__dirname + "/routes");

function error(status, msg) {
  var err = new Error(msg);
  err.status = status;
  return err;
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api", routeAPI);

app.use(function (req, res) {
  res.status(404);
  res.send({ error: "Sorry, can't find that" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
