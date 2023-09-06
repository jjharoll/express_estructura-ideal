import { resolve } from "node:path";
import express, { json } from "express";
import cors from "cors";

import { moviesRouter } from "./routes/movies.js";

const PORT = process.env.PORT ?? 3000;

const app = express();

app.disable("x-powered-by");
app.use(json());
app.use(cors());

// Index page
app.get("/", (req, res) => {
  res.status(200).sendFile(resolve("views/index.html"));
});

// API routes
app.use("/movies", moviesRouter);

// Not found page
app.use((req, res) => {
  res.status(200).sendFile(resolve("views/404.html"));
});

app.listen(PORT, () => {
  console.log(`Server (node) listening on port: http://localhost:${PORT}`);
});
