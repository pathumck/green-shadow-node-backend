import { Router } from "express";
import { createVehicle, getAllVehicles } from "../controller/vehicle_controller"; // Check if correct path

const vehicleRouter = Router();

vehicleRouter.post("/", createVehicle);
vehicleRouter.get("/", getAllVehicles)

export default vehicleRouter;
