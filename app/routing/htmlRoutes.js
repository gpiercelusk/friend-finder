var path = require("path")

//two HTML routes
module.exports = function (app) {
  //get route to display survey page
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  //route to display home page
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
}