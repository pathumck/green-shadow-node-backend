import { Router } from "express";
import { createLog } from "../controller/log_controller";

const logRouter = Router();

logRouter.post("/",createLog)

export default logRouter