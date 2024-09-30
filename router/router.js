const express = require("express");
const {
  addName,
  renderHome,
  deleteName,
  getEdit,
  postEdit,
} = require("../controller/controller");

const router = express.Router();

router.get("/", renderHome);
router.post("/add", addName);
router.post("/delete", deleteName);
router.get("/edit/:id", getEdit);
router.post("/edit/:id", postEdit);

module.exports = router;