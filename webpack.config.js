const path = require("path");

module.exports = {
  mode: "development",
  entry: "./js/db.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  watch: true,
};
