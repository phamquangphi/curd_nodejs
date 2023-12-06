const mongoose = require("mongoose");

const accountSchema = mongoose.Schema(
  {
    taikhoan: {
      type: String,
      required: true,
      unique: true,
    },
    matkhau: {
      type: String,
      required: true,
    },
    hovaten: {
      type: String,
      required: true,
    },
    ngaysinh: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  {
    versionKey: false,
  }
);
module.exports = mongoose.model("accounts", accountSchema);
