function hasBread(testString, breadTypesInput) {
  var breadName = null;
  var breadTypes = null;
  const breadTypesDefault = ["sourdough", "ciabatta", "rye", "bread"];

  if (breadTypesInput == null || breadTypesInput == "") {
    breadTypes = breadTypesDefault;
  } else {
    breadTypes = breadTypesInput.toLowerCase().split(" ");
  }
  const splitString = testString.split(" ");
  for (var index in splitString) {
    // check if each array element mtaches breadTypes
    /* if the constant breadTypes locates a matching value in the array 
    splitstring (where every element is truned into lowecase) though the use of the function .indexOf */
    if (breadTypes.indexOf(splitString[index].toLowerCase()) > -1) {
      breadName = splitString[index];
    }
  }

  return breadName;
}

const express = require("express"); //import excess package
const path = require("path"); //import path package
const expressFileUpload = require("express-fileupload"); //import excess-fileupliad package

const app = express(); //create a web application

//plugins for the web application
app.use(express.urlencoded()); // middleware to recgonise the incoming Request objects such as POST/PUT requests
app.use(expressFileUpload()); // Express framework which is used to handle files
app.use(express.static(path.join(__dirname, "public"))); //allows the style.css page to work with every html page

// define web paths and request handlers
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "ui/views/home.html")); //
});

//
app.post("/bread", function (req, res) {
  //ADDINPUT BREAD
  const data = req.body["input_string"];
  const breadTypes = req.body["input_bread_types"];
  const breadName = hasBread(data, breadTypes);
  if (breadName) {
    res.sendFile(path.join(__dirname, "ui/views/has_bread.html"));
  } else {
    res.sendFile(path.join(__dirname, "ui/views/has_no_bread.html"));
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
