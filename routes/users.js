// require express

const express = require("express");

//require bcryp

const bcrypt = require("bcryptjs");

// setup router

const router = express.Router();

// User Model

const User = require("../models/User");

//set homepage router and welcome message

// Register page
router.get("/register", (req, res) => res.render("register"));

//register handle
router.post("/register", (req, res) => {
  //distracting
  const { name, email, password, password2 } = req.body;

  //VALIDATIONS
  let errors = [];

  //check required fields
  if (!name || !email || !password || !password2) {
    errors.push({ msg: "Please fill in all fields" });
  }

  // check password match

  if (password !== password2) {
    errors.push({ msg: "Password do not match" });
  }

  //check password length

  if (password.length < 6) {
    errors.push({ msg: "Password should be at the least 6 characters" });
  }

  if (errors.length > 0) {
    res.render("register", {
      errors,
      name,
      email,
      password,
      password2,
    });
  } else {
    // validation passed
    User.findOne({ email: email }).then((user) => {
      if (user) {
        // User exists
        errors.push({ msg: "Email is alredy registered" });
        res.render("register", {
          errors,
          name,
          email,
          password,
          password2,
        });
      } else {
        const newUser = new User({
          name,
          email,
          password,
        });

        //Hash password

        bcrypt.genSalt(10, (err, salt) =>
          bcrypt.hash(newUser.password, salt, (err, hash) => {
              if(err) throw err;

              //set password to hashed
              newUser.password = hash

              //save user

              newUser.save()
              .then(user => {
                  req.flash('success_msg', 'You are now registered and can log in')
                  res.redirect('login')
              })
              .catch(err => console.log(err))


          })
        );
      }
    });
  }
});

// login page
router.get("/login", (req, res) => res.render("login"));

//export router

module.exports = router;
