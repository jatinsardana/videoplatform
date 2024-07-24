import express from "express";
const app = express();
app.use(express.json());

import mongoose from "mongoose";
import { config } from "dotenv";
config();

import cors from "cors";
app.use(cors());

mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("mongoose connected");
  })
  .catch(() => {
    console.log("mongoose not connected");
    process.exit(1)
  });



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app is listening on ${port}`);
});
