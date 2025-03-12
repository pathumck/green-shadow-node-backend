import { Router } from "express";
import { createLog, getAllLogs } from "../controller/log_controller";

const logRouter = Router();

logRouter.post("/", createLog);
logRouter.get("/", getAllLogs);

export default logRouter;
