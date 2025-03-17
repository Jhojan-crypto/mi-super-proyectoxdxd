// filepath: c:\Users\aparato\mi-super-proyecto-xdxdxd\backend\index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

let counter = 0;

app.get("/api/counter", (req, res) => {
  res.json({ counter });
});

app.post("/api/counter/increment", (req, res) => {
  counter += 1;
  res.json({ counter });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});