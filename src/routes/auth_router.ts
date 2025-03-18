import express, { RequestHandler } from "express";
import {
  register,
  login,
  updateUser,
  deleteUser,
  refreshToken,
  getAllUsers,
  logout,
} from "../controller/auth_controller";
import { authenticateUser, authorizeRole } from "../middlewares/authMiddleware";

const authRouter = express.Router();

authRouter.post("/login", login as RequestHandler);
authRouter.post(
  "/register",
  authenticateUser as RequestHandler,
  authorizeRole("MANAGER") as RequestHandler,
  register as RequestHandler
);
authRouter.put(
  "/:id",
  authenticateUser as RequestHandler,
  authorizeRole("MANAGER") as RequestHandler,
  updateUser as RequestHandler
);
authRouter.delete(
  "/:userId",
  authenticateUser as RequestHandler,
  authorizeRole("MANAGER") as RequestHandler,
  deleteUser as RequestHandler
);
authRouter.get(
  "/",
  authenticateUser as RequestHandler,
  authorizeRole("MANAGER", "ADMIN", "SCIENTIST") as RequestHandler,
  getAllUsers
);
authRouter.post("/refresh", refreshToken as RequestHandler);
authRouter.post("/logout", logout);

export default authRouter;
