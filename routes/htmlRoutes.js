var path = require("path");

module.exports = function(app) {
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../Develop/public/notes.html"));
  });

  app.get("/index", function(req, res) {
      res.sendFile(path.join(__dirname, "../Develop/public/index.html"))
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../Develop/public/index.html"));
  });
};
