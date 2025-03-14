"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vehicle_controller_1 = require("../controller/vehicle_controller");
const vehicleRouter = (0, express_1.Router)();
vehicleRouter.post("/", vehicle_controller_1.createVehicle);
vehicleRouter.get("/", vehicle_controller_1.getAllVehicles);
vehicleRouter.put("/:id", vehicle_controller_1.updateVehicle);
exports.default = vehicleRouter;
