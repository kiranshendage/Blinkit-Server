const mongoose = require("mongoose");

const hookhaProductSchema = new mongoose.Schema({
  image: { type: String, required: true },
  earliest: { type: String, default: "*EARLIEST" },
  name: { type: String, required: true, unique: true },
  quantity: { type: String, required: true },
  price: { type: String, required: true }
});

module.exports = mongoose.model("HookhaProduct", hookhaProductSchema, "HookhaProducts");