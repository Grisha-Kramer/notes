var path = require("path")


module.exports = function(svr) {

    svr.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname,"../Develop/notes.html"))
    });


   
};