function hasBread(testString) {
  var hasBread = null;
  const breadTypes = [
    //array for existing bread tyoes
    "sourdough",
    "ciabatta",
    "rye",
    "bread",
  ];
  const splitString = testString.split(" ");
  for (var item in splitString) {
    if (breadTypes.indexOf(splitString[item].toLowerCase()) > -1) {
      hasBread = splitString[item];

    }
  }

  return hasBread
}

const express = require("express");
const path = require("path");
const app = express();
app.use(express.urlencoded());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "ui/views/bread.html"));
});

app.post("/bread", function (req, res) {
  const breadName = hasBread(req.body["input_string"]);
  if (breadName) {
    res.send("There is " + breadName);
  } else {
    res.send("There is no bread");
  }
});

app.listen(3000);
console.log("Server up on port 3000");
