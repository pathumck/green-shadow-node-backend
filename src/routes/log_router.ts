import { RequestHandler, Router } from "express";
import { createLog, getAllLogs } from "../controller/log_controller";
import { authenticateUser, authorizeRole } from "../middlewares/authMiddleware";

const logRouter = Router();

logRouter.post(
  "/",
  authenticateUser as RequestHandler,
  authorizeRole("MANAGER", "ADMIN", "SCIENTIST") as RequestHandler,
  createLog
);
logRouter.get(
  "/",
  authenticateUser as RequestHandler,
  authorizeRole("MANAGER", "ADMIN", "SCIENTIST") as RequestHandler,
  getAllLogs
);

export default logRouter;
