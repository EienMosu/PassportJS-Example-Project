const router = require("express").Router();
const passport = require("passport");

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      massage: "successfull",
      user: req.user,
      // cookies
      // cookies: req.cookies
      // or jwt you can send
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    massage: "failure",
  });
});

router.get("/logout", (req, res) => {
  req.logOut();

  res.redirect("http://localhost:3000");
});

// Google
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000",
    failureRedirect: "/login/failed",
  })
);

// Github
router.get("/github", passport.authenticate("github", { scope: ["profile"] }));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: "http://localhost:3000",
    failureRedirect: "/login/failed",
  })
);

module.exports = router;
