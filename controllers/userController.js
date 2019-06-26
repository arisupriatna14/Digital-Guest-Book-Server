const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/userModel');

const registerUser = (req, res) => {
  const { email, password } = req.body;

  User
    .create({ email, password })
    .then((result) => {
      res.status(201).json({
        message: 'Register success',
        data: result
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Register failed. Please try again!',
        error: err
      });
    });
}

const loginUser = (req, res) => {
  const { email, password } = req.body;
  console.log(req.body)

  User
    .findOne({ email })
    .then((result) => {
      const passwordFromDB = result.password;
      bcrypt
        .compare(password, passwordFromDB)
        .then((isPassword) => {
          if (isPassword) {
            const token = jwt.sign({
              id: result._id,
              email: result.email
            }, process.env.JWT_SECRET_KEY);

            res.status(200).json({
              message: 'Login success',
              email: result.email,
              token
            });
          } else {
            res.status(401).json({
              message: 'Password Wrong'
            });
          }
        })
        .catch((err) => {
          res.status(500).json({
            error: err
          });
        })
    })
}

module.exports = { registerUser, loginUser }