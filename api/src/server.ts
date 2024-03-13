import express from "express";
import dotenv from "dotenv";
import Logger from "./utils/Logger";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  Logger.http(`Server is running on port ${port}!`);
});
