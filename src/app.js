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
  for (var index in splitString) {
    // check if each word is on breadTypes
    if (breadTypes.indexOf(splitString[index].toLowerCase()) > -1) {
      hasBread = splitString[index];
    }
  }

  return hasBread;
}

const express = require("express"); //import excess package
const path = require("path"); //import path package
const expressFileUpload = require("express-fileupload");

const app = express(); //create a web application

//plugins for the web application
app.use(express.urlencoded());
app.use(expressFileUpload());
app.use(express.static(path.join(__dirname, "public")))

// define web paths and request handlers
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "ui/views/bread.html"));
});

//
app.post("/bread", function (req, res) {
  const data = req.body["input_string"];
  const breadName = hasBread(data);
  if (breadName) {
    res.send("HAS BREAD. The text has " + breadName);
  } else {
    res.send("DOESN'T HAVE BREAD.");
  }
});

//
app.get("/file", function (req, res) {
  res.sendFile(path.join(__dirname, "ui/views/upload.html"));
});

// recieve data from upload
app.post("/upload", function (req, res) {
  const data = req.files.input_file["data"].toString("utf-8").trim();
  const breadName = hasBread(data);
  if (breadName) {
    res.send("Has Bread. " + breadName);
  } else {
    res.send("There is no bread.");
  }
});

app.listen(3000);
console.log("Server up on port 3000");
