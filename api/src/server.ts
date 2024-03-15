import express from "express";
import Logger from "./utils/Logger";
import robotRouter from "./routes/RobotRoutes";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("api/robot", robotRouter);

app.listen(port, () => {
  Logger.info(`Server running on port ${port}`);
});
