const express = require("express");
const app = express();

app.listen(3000, (error) => {
  if (error) {
    console.log("Error starting the server");
  } else {
    console.log("Server started successfully");
  }
});
