const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.connect(process.env.URI)
    .then((data) => {
      console.log(
        `mongodb sucessfully connected to server:${data.connection.host}`
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;
