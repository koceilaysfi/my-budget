const bcrypt = require("bcrypt");
const User = require("../models/user.js");

exports.signup = async (req, res) => {
  const data = req.body;
  try {
    const hash = await bcrypt.hash(data.password, 10);
    try {
      await User.create({
        ...data,
        password: hash,
      });
      res.status(201).json({
        code: 201,
        message: "Utilisateur crée !",
      });
    } catch (error) {
      if (error.code === 11000) {
        res.status(409).json({
          code: 409,
          message: "Un compte avec cet email existe déjà !",
        });
      } else {
        res.status(500).json({
          code: 500,
          message: "Oups… quelque chose s’est mal passé de notre côté !",
        });
      }
      return;
    }
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: "Oups… quelque chose s’est mal passé de notre côté !",
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (user === null) {
      res.status(400).json({
        code: 400,
        message:
          "L’identifiant ou le mot de passe est incorrect. Veuillez réessayer.",
      });
      return;
    }
    try {
      const isValid = await bcrypt.compare(password, user.password);

      if (isValid) {
        res.status(200).json({
          code: 200,
        });
      } else {
        res.status(400).json({
          code: 400,
          message:
            "L’identifiant ou le mot de passe est incorrect. Veuillez réessayer.",
        });
      }
    } catch (e) {
      res.status(500).json({
        code: 500,
        message: "Oups… quelque chose s’est mal passé de notre côté !",
      });
      return;
    }
  } catch {
    res.status(500).json({
      code: 500,
      message: "Oups… quelque chose s’est mal passé de notre côté !",
    });
  }
};
