import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { computeConeData } from "./computeConeData";

dotenv.config();

const app: Express = express();

// middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "./client/dist")));
app.use(cors());

// routes
app.post("/api/compute", computeConeData);

// Return the client
app.get("/*", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "./client/dist/index.html"));
});

// listen for requests
app.listen(3000, () => {
  console.log("listening on port", 3000);
});
