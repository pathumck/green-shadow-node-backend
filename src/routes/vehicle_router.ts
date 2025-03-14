import { Router } from "express";
import {
  createVehicle,
  deleteVehicle,
  getAllVehicles,
  updateVehicle,
} from "../controller/vehicle_controller";

const vehicleRouter = Router();

vehicleRouter.post("/", createVehicle);
vehicleRouter.get("/", getAllVehicles);
vehicleRouter.put("/:id", updateVehicle);
vehicleRouter.delete("/:id", deleteVehicle);

export default vehicleRouter;
