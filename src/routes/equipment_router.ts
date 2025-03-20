import { RequestHandler, Router } from "express";
import {
  createEquipment,
  deleteEquipment,
  getAllEquipment,
  updateEquipment,
} from "../controller/equipment_controller";
import { authenticateUser, authorizeRole } from "../middlewares/authMiddleware";

const equipmentRouter = Router();

equipmentRouter.post(
  "/",
  authenticateUser as RequestHandler,
  authorizeRole("MANAGER", "ADMIN", "SCIENTIST") as RequestHandler,
  createEquipment
);
equipmentRouter.get(
  "/",
  authenticateUser as RequestHandler,
  authorizeRole("MANAGER", "ADMIN", "SCIENTIST") as RequestHandler,
  getAllEquipment
);
equipmentRouter.put(
  "/:id",
  authenticateUser as RequestHandler,
  authorizeRole("MANAGER", "ADMIN", "SCIENTIST") as RequestHandler,
  updateEquipment
);
equipmentRouter.delete(
  "/:id",
  authenticateUser as RequestHandler,
  authorizeRole("MANAGER", "ADMIN", "SCIENTIST") as RequestHandler,
  deleteEquipment
);

export default equipmentRouter;
