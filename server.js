import express from "express";

import { MONGODB_URL, PORT } from "./config/index.js";
import mongoose from "mongoose";
import router from "./src/routes/routes.js";
const app = express();

app.use(express.json());

mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api', router);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("connected");
});
app.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", `http://localhost:${PORT}`);
});
