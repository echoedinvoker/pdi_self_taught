const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post("/test", (req, res) => {
  console.log(req.body);
  res.status(200).json({
    title: "node_test",
    status: "success",
    data: [
      {
        user: "u01",
        msg: "msg1",
      },
      {
        user: "u02",
        msg: "msg2",
      },
    ],
  });
});

app.listen(3600, () => {
  console.log("Server is running on port 3600");
});
