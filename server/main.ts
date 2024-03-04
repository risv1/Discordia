import express from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(__dirname, '../.env') })

const PORT = process.env.PORT || 3000

const app = express()

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
