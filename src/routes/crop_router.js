"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const crop_controller_1 = require("../controller/crop_controller");
const cropRouter = (0, express_1.Router)();
cropRouter.post("/", crop_controller_1.createCrop);
cropRouter.get("/", crop_controller_1.getAllCrops);
exports.default = cropRouter;
