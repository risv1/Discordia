import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import passport from "passport";
import cors from "cors";
import path from "path";
import user from "./api/user";
import connectToDB from "./db";

dotenv.config({ path: path.join(__dirname, '../.env') })


if (!process.env.ACCESS_TOKEN_SECRET) {
  throw new Error('ACCESS_TOKEN_SECRET environment variable is not defined.');
}
const app = express()
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
const PORT = process.env.SERVER_PORT || 3000
connectToDB();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" })
})

app.use("/user",user);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
