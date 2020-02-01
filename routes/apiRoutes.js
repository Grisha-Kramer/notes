var notes = require("../Develop/db/noteTaker");
var path = require("path");
var fs = require("fs");
var data = require("../Develop/db/db.json");


module.exports = function(app) {
  app.get("/api/notes", function(req, res) {
    res.json(data);
  });

  app.post("/api/notes", function(req, res) {
    // notes.push(req.body);
    // res.json(true);
    var makeNote = req.body;
    makeNote.id = data.length + 1

    console.log(makeNote);

    data.push(makeNote);

    fs.writeFile("./Develop/db/db.json", JSON.stringify(data), function(err) {
      if (err) throw err;
      console.log("makeNote worked");
    });
  });

  app.delete("/api/notes/:id", function(req, res) {
    console.log(':id param', req.params.id)
    data = data.filter(function (note) {
      if (note.id != req.params.id) {
        return true
      }
    })
    fs.writeFile("./Develop/db/db.json", JSON.stringify(data), function (err) {
      if (err) throw err;
      console.log("deletes")
       res.json({ ok: true });
    })
    
   
  });
};
