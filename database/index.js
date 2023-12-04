const mongoose = require("mongoose");
const { dbHost, dbPass, dbName, dbPort, dbUser } = require("../app/config");
mongoose.connect(
  `mongodb://eduwork:12345@localhost:27017/eduworkstore?authSource=admin`
);
const db = mongoose.connection;

module.exports = db;
