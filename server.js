var express = require("express");

var svr = express();

var PORT = process.env.PORT || 8080;

svr.use(express.urlencoded({ extended: true}));
svr.use(express.json());

require("/notes")(svr)
require("/notes/:id")(svr)


svr.listen(PORT, function() {
    console.log("Notes app listening on PORT: " + PORT);
});