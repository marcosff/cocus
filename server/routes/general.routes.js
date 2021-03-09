module.exports = app => {
    const general = require("../controllers/general/general.controllers");

    app.get("/", general.start);
    app.get("/:name", general.findRepositoryByName);
}