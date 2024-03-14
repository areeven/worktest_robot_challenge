import express from "express";
import Logger from "./utils/Logger";

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  Logger.info(`Server running on port ${port}`);
});
