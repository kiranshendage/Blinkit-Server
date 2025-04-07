// const mongoose = require("mongoose");

// const coldDrinkSchema = new mongoose.Schema({
//   image: { type: String, required: true },
//   earliest: { type: String, default: "*EARLIEST" },
//   name: { type: String, required: true, unique: true },
//   quantity: { type: String, required: true },
//   price: { type: String, required: true }
// });

// module.exports = mongoose.model("ColdDrink", coldDrinkSchema, "ColdDrinks");

const mongoose = require("mongoose");

const coldDrinkSchema = new mongoose.Schema({
  image: { type: String, required: true },
  earliest: { type: String, default: "*EARLIEST" },
  name: { type: String, required: true, unique: true },
  quantity: { type: String, required: true },
  price: { type: String, required: true },
  reviews: [
    {
      username: { type: String, required: true },
      rating: { type: Number, required: true, min: 1, max: 5 },
      comment: { type: String, required: true }
    }
  ]
});

module.exports = mongoose.model("ColdDrink", coldDrinkSchema, "ColdDrinks");
