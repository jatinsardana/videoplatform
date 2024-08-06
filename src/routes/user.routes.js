import express from "express";
import User from "../models/user.model.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { fullname, username, password, email } = req.body;

  try {
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });

    if (existingUser) {
      return res.status(400).send("User already exists");
    }

    const newUser = await User.create({
      fullname,
      username,
      password,
      email
    });

    res.status(201).send("User created successfully");
  } catch (error) {
    console.error('Error in /register route:', error);
    res.status(500).send('Server error');
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user || user.password !== password) {
      return res.status(400).send('Invalid email or password');
    }

    res.status(200).send('User logged in successfully');
    console.error('login route:', username , password);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

export default router;
