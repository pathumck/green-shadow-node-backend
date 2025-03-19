import { RequestHandler, Router } from "express";
import {
  createVehicle,
  deleteVehicle,
  getAllVehicles,
  updateVehicle,
} from "../controller/vehicle_controller";
import { authenticateUser, authorizeRole } from "../middlewares/authMiddleware";

const vehicleRouter = Router();

vehicleRouter.post("/", authenticateUser as RequestHandler, authorizeRole("MANAGER", "ADMIN", "SCIENTIST") as RequestHandler, createVehicle);
vehicleRouter.get("/", authenticateUser as RequestHandler, authorizeRole("MANAGER", "ADMIN", "SCIENTIST") as RequestHandler, getAllVehicles);
vehicleRouter.put("/:id", authenticateUser as RequestHandler, authorizeRole("MANAGER", "ADMIN", "SCIENTIST") as RequestHandler, updateVehicle);
vehicleRouter.delete("/:id", authenticateUser as RequestHandler, authorizeRole("MANAGER", "ADMIN", "SCIENTIST") as RequestHandler, deleteVehicle);

export default vehicleRouter;
