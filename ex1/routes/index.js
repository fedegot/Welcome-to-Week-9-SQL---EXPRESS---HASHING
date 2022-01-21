const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({ query: `queries` });
});

// router.get("/", (req, res) => {
//   //remove all query parameters that begin with "_" before sending the response
//   let queries = {};
//   // filter queries
//   for (const [key, value] of Object.entries(req.query)) {
//     if (key.startsWith("_")) {
//       continue;
//     } else {
//       queries[key] = value;
//     }
//   }
//   //request for json file
//   res.status(200).json({ query: queries });
// });

// LINK TO INSOMNIA ESEMPIO http://localhost/json?name=masmdas&popper=masco&popper=2&popper=3

// router.get("/accounting", (req, res) => res.status(200).send("Accounting"));

// router.get("/:name", (req, res) => {
//   console.log(req.params);
//   res.status(200).json({ name: req.params.name });
// });

module.exports = router;
