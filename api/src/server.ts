import express from "express";
import dotenv from "dotenv";
import Logger from "./utils/Logger";
import robotRouter from "./routes/RobotRoutes";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/robot", robotRouter);

app.listen(port, () => {
  Logger.info(`Server is running at http://localhost:${port}`);
});
