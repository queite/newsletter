const { Router } = require("express");
const newsController = require("../controllers/newsController");

const router = Router();

router.post("/", newsController.create);

module.exports = router;
