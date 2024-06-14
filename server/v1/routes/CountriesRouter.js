const express = require("express");
const controller = require("../../controllers/CountriesController");
const router = express.Router();

router.get("/", controller.getAllCountries);

router.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../../client/build', 'index.html'));
});

module.exports = router;