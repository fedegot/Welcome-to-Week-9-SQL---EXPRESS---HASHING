const router = require("express").Router();
const User = require("../models/user");

// get all users
router.get("/", async (req, res) => {
  const allUsers = await User.findAll();
  res.status(200).json({ msg: "worked", data: allUsers });
});

// create a user
router.post("/", async (req, res) => {
  const user = await User.create({
    name: req.body.name,
    passwordHash: req.body.password,
  });
  res.status(201).json({ msg: "worked" });
});

// delete all users
router.delete("/", async (req, res) => {
  await User.truncate();
  res.status(200).json({ msg: "worked" });
});

// get a single user
router.get("/:id", async (req, res) => {
  const user = await User.findAll({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ msg: "worked", user: user });
});

// update a single user
router.put("/:id", async (req, res) => {
  await User.update(req.body, {
    where: { id: req.params.id },
  });
  res.status(200).json({ msg: "worked", data: req.body });
});

// delete a single user
router.delete("/:id", async (req, res) => {
  await User.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ msg: "deleted user", id: req.params.id });
});

module.exports = router;
