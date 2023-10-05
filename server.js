import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import {fileURLToPath} from "url";
import { computeConeData } from "./computeConeData.js";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "./client/dist")));
app.use(cors());

// routes
app.post("/api/compute", computeConeData);

// Return the client
app.get("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "./client/index.html"));
});

const PORT = process.env.PORT || 3000;

// listen for requests
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
