var notes = require("../Develop/db/noteTaker");


module.exports = function(app) {
  app.get("/api/notes", function(req, res) {
    res.json(notes);
  });

  app.post("/api/notes", function(req, res) {
    notes.push(req.body);
    res.json(true);
  });

  app.delete("/notes/:id", function(req, res) {
    notes.length = 0;

    res.json({ ok: true });
  });
};
