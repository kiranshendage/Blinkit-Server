
// /server/scripts/updatePasswords.js

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const RegisterModel = require('../Model/Register'); // Ensure the correct path to Register model

// Connect to MongoDB
mongoose.connect("mongodb+srv://kiran:Kiran2003@cluster0.38yys.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Blinkiti")
  .then(() => {
    console.log("Connected to MongoDB");
    hashPasswords(); // Call function to hash passwords
  })
  .catch(err => console.log("Database connection error:", err));

async function hashPasswords() {
  try {
    const users = await RegisterModel.find(); // Fetch all users from the database
    for (let user of users) {
      const salt = await bcrypt.genSalt(10); // Generate salt for hashing
      const hashedPassword = await bcrypt.hash(user.password, salt); // Hash the password
      user.password = hashedPassword; // Update the password field with hashed value
      await user.save(); // Save the user with the hashed password
    }
    console.log('Passwords have been successfully updated to hashed values');
    mongoose.disconnect(); // Close the database connection
  } catch (err) {
    console.log('Error during password hashing:', err);
  }
}
