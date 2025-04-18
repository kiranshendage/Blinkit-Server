const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const routes = require('./Route/index');
const RegisterModel = require('./Model/Register');

const app = express();
const port = 5444;

// ✅ Database Connection
mongoose.connect("mongodb+srv://kiran:Kiran2003@cluster0.38yys.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Blinkiti")
  .then(() => console.log("Database Connected"))
  .catch(err => console.log("Database Connection Error:", err));

// ✅ Middleware
app.use(express.json());
app.use(cors());

//✅Create API route
// app.post("/register", async (req, res) => {
//     let user = new RegisterModel(req.body); // ✅ Correct reference
//     let result = await user.save();
//     res.send(result);
// });


// ✅ CORS Headers Middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


// Login Endpoint
// app.post('/login', (req, res) => {
//     const { email, password } = req.body;
//     RegisterModel.findOne({ email: email })
//       .then(user => {
//         if (user) {
//           if (user.password === password) {
//             res.json("Success");
//           } else {
//             res.json("The password is incorrect");
//           }
//         } else {
//           res.json("No record exists");
//         }
//       })
//       .catch(err => res.json(err));
//   });

// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await RegisterModel.findOne({ email });
//     if (!user) {
//       return res.json({ success: false, message: "No record exists" });
//     }

//     if (user.password !== password) {
//       return res.json({ success: false, message: "Incorrect password" });
//     }

//     res.json({ success: true, message: "Login successful", user });
//   } catch (err) {
//     res.status(500).json({ success: false, message: "Server error", error: err });
//   }
// });


const jwt = require('jsonwebtoken');


const bcrypt = require('bcrypt');

// Login Endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await RegisterModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Incorrect password" });
    }

    // success
    res.json({ success: true, message: "Login successful" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});


// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.json({ success: false, message: "User not found" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.json({ success: false, message: "Incorrect password" });
//     }

//     // success
//     res.json({ success: true, message: "Login successful" });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// });




app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await RegisterModel.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "User already exists" });
    }

    // Hash the password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user with hashed password
    const newUser = new RegisterModel({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.json({ success: true, message: "Account created", user: newUser });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error", error: err });
  }
});

// **************************************



  
  // Registration Endpoint
  // app.post('/register', (req, res) => {
  //   const { name, email, password } = req.body;
  //   RegisterModel.findOne({ email: email })
  //     .then(user => {
  //       if (user) {
  //         res.json("Already have an account");
  //       } else {
  //         RegisterModel.create({ name, email, password })
  //           .then(() => res.json("Account created"))
  //           .catch(err => res.json(err));
  //       }
  //     })
  //     .catch(err => res.json(err));
  // });


  // *****************working
  // app.post('/register', async (req, res) => {
  //   const { name, email, password } = req.body;
  
  //   try {
  //     // Check if the user already exists
  //     const existingUser = await RegisterModel.findOne({ email });
  //     if (existingUser) {
  //       return res.json({ success: false, message: "User already exists" });
  //     }
  
  //     // Create a new user
  //     const newUser = await RegisterModel.create({ name, email, password });
  //     res.json({ success: true, message: "Account created", user: newUser });
  //   } catch (err) {
  //     res.status(500).json({ success: false, message: "Server error", error: err });
  //   }
  // });
  // ***********************************


  
  // app.post('/login', async (req, res) => {
  //   const { email, password } = req.body;
  
  //   try {
  //     const user = await RegisterModel.findOne({ email });
  
  //     if (!user) {
  //       return res.json({ success: false, message: "User not found" });
  //     }
  
  //     // Compare the provided password with the hashed password in the database
  //     const isMatch = await bcrypt.compare(password, user.password);
  //     if (!isMatch) {
  //       return res.json({ success: false, message: "Incorrect password" });
  //     }
  
  //     // success
  //     res.json({ success: true, message: "Login successful" });
  
  //   } catch (err) {
  //     console.error(err);
  //     res.status(500).json({ success: false, message: "Server error" });
  //   }
  // });
       

  app.post("/cold-drink/:id/review", async (req, res) => {
    const { id } = req.params;
    const { username, rating, comment } = req.body;

    try {
        const coldDrink = await ColdDrink.findById(id);
        if (!coldDrink) {
            return res.status(404).json({ message: "Cold drink not found" });
        }

        coldDrink.reviews.push({ username, rating, comment });
        await coldDrink.save();

        res.status(200).json({ message: "Review added successfully", coldDrink });
    } catch (error) {
        res.status(500).json({ message: "Error adding review", error });
    }
});
app.get("/cold-drink/:id/reviews", async (req, res) => {
  const { id } = req.params;

  try {
      const coldDrink = await ColdDrink.findById(id);
      if (!coldDrink) {
          return res.status(404).json({ message: "Cold drink not found" });
      }

      res.json(coldDrink.reviews);
  } catch (error) {
      res.status(500).json({ message: "Error fetching reviews", error });
  }
});

app.use('/', routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
