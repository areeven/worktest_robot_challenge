import express from "express";
import dotenv from "dotenv";
import Logger from "./utils/Logger";
import ApplyMiddlewares from "./configurations/ApplyMiddlewares";
import { notFound } from "./middlewares/Middleware";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || "development";

ApplyMiddlewares(app);
app.use(notFound);

app.listen(port, () => {
  Logger.info(`Server connection established on http://localhost:${port}`);
  if (env === "development") {
    Logger.warn(`Server up and running in developer mode!`.toUpperCase());
  }
});
