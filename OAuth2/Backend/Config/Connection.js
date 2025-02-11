const mongoose = require("mongoose");

const connectToDB = (URI) => {
  mongoose
    .connect(URI)
    .then(() => {
      console.log("Database connected");
    })
    .catch((error) => {
      console.log(error);
    });
};
module.exports = connectToDB;
