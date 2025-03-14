import { Router } from "express";
import {
  createVehicle,
  getAllVehicles,
  updateVehicle,
} from "../controller/vehicle_controller";

const vehicleRouter = Router();

vehicleRouter.post("/", createVehicle);
vehicleRouter.get("/", getAllVehicles);
vehicleRouter.put("/:id", updateVehicle);

export default vehicleRouter;
