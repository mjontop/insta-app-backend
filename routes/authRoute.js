var express = require("express");
var router = express.Router();
const { check } = require("express-validator");
const {
  getUserFromUsername,
  signup,
  signin,
  updateProfile,
  searchUser,
  getUserFromEmail,
} = require("../controllers/auth");
const authenticate = require("../middleware/authenticate");

router.post(
  "/signup",
  check("username", "username should be at least 3 char").isLength({ min: 3 }),
  check("email", "Valid email is required").isEmail(),
  check("password", "password should be at least 4 char").isLength({
    min: 6,
  }),
  signup
);

router.post(
  "/signin",
  check("email", "Valid Email or username is required").isLength({ min: 3 }),
  check("password", "password field is required").isLength({ min: 1 }),
  signin
);

router.post("/updateProfile", authenticate, updateProfile);
router.get("/searchUser/:searchKey", searchUser);
router.get("/getUserFromUsername/:username", getUserFromUsername);
router.get("/getUserFromEmail/:email", getUserFromEmail);

module.exports = router;
