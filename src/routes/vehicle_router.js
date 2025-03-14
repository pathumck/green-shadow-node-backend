"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vehicle_controller_1 = require("../controller/vehicle_controller"); // Check if correct path
const vehicleRouter = (0, express_1.Router)();
vehicleRouter.post("/", vehicle_controller_1.createVehicle);
exports.default = vehicleRouter;
