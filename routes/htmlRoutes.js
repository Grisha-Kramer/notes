var path = require("path");

module.exports = function(svr) {
  svr.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../Develop/public/notes.html"));
  });

  svr.get("/index", function(req, res) {
      res.sendFile(path.join(__dirname, "../Develop/public/index.html"))
  })
};
