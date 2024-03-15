import express from "express";
import Logger from "./utils/Logger";
import moveRouter from "./routes/MoveRoutes";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/robot", moveRouter);

app.listen(port, () => {
  Logger.info(`Server running on port ${port}`);
});
