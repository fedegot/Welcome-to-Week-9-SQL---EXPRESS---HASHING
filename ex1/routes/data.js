const router = require("express").Router();

router.get("/data", (req, res) => {
  res.status(200).json({ query: `queries2` });
});

module.exports = router;
