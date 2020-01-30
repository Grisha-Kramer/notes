var notes = require("../Develop/public/notes");
var index = require("../Develop/public/index")

module.exports = function(svr) {
  svr.get("/notes", function(req, res) {
    res.json(notes);
  });

  svr.post("/notes", function(req, res) {
    notes.push(req.body);
    res.json(true);
  });

  svr.post("/notes/:id", function(req, res) {
    notes.length = 0;

    res.json({ ok: true });
  });
};
