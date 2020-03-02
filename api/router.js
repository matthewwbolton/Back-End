const router = require("express").Router();

// import routes
const authRouter = require("../auth/router.js");
const usersRouter = require("../users/router.js");

// import middleware

// call routers and implement any applicable middleware
router.use("/auth", authRouter);
router.use("/users", usersRouter);

router.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = router;
