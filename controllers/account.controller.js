const accountModel = require("../models/account.model");

module.exports = {
  createAccount: async (req, res) => {
    try {
      const body = req.body;
      const newAccount = await accountModel.create(body);
      return res.status(200).json(newAccount);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
  getAccount: async (req, res) => {
    try {
      const accounts = await accountModel.find();
      return res.status(200).json(accounts);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
  updateAccount: async (req, res) => {
    try {
      const id = req.params.id;
      console.log(id);
      const body = req.body;
      const updateAccount = await accountModel.findByIdAndUpdate(id, body, {
        new: true,
      });
      return res.status(200).json(updateAccount);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
  deletAccount: async (req, res) => {
    try {
      const id = req.params.id;
      const deletAccount = await accountModel.findByIdAndDelete(id);
      return res.status(200).json(deletAccount);
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  },
};
