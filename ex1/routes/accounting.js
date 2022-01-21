const router = require("express").Router();

let staff = [
  { name: "bob", age: 34 },
  { name: "Mat", age: 24 },
  { name: "sob", age: 64 },
];
//adding the ID a staff
router.get("/", (req, res) =>
  res.status(200).json(
    staff.map((member, i) => {
      member.id = i + 1;
      return member;
    })
  )
);

//to create a new obj json in the list POST
router.post("/", (req, res) => {
  staff.push(req.body);
  res.status(201).json({ msg: "created", data: req.body });
});

//to cancell all the staff, use DELETE with Insomnia
router.delete("/", (req, res) => {
  staff = [];
  res.status(201).json({ msg: "Deleted all staff", data: staff });
});

//Find individual accountants GET http://localhost/accounting/ID or 1/2
router.get("/:id", (req, res) => {
  if (req.params.id - 1 < 0 || req.params.id > staff.length) {
    res.status(404).json({ msg: `${req.params.id} not found` });
  } else {
    res.status(200).json(staff[req.params.id - 1]);
  }
});

//Delete an individual member of staff DELETE http://localhost/accounting/ID
router.delete("/:id", (req, res) => {
  const removed = staff.splice(req.params.id - 1, 1);
  res.status(200).json({ msg: `deleted ${req.params.id}`, data: removed });
});

//Update an individual member of staff PUT
//ADD A JSON FILE {"name": "bobb2", "age": 66}
router.put("/:id", (req, res) => {
  staff[req.params.id - 1] = req.body;
  res.status(200).json({ msg: `Updated ${req.params.id}`, data: req.body });
});

router.get("/:name", (req, res) =>
  res.status(200).json({ name: req.params.name })
);

module.exports = router;
