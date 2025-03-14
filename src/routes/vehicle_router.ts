import { Router } from "express";
import { createVehicle } from "../controller/vehicle_controller"; // Check if correct path

const vehicleRouter = Router();

vehicleRouter.post("/", createVehicle);

export default vehicleRouter;
