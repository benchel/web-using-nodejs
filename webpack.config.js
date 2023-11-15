const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./server.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./view"),
  },
};