const express = require("express");
const router = express.Router();

const {
  createAccount,
  getAccount,
  updateAccount,
  deletAccount,
} = require("../controllers/account.controller");
router.route("/").post(createAccount).get(getAccount);
router.route("/:id").patch(updateAccount).delete(deletAccount);
module.exports = router;
