"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const field_s_crops_controller_1 = require("../controller/field's_crops_controller");
const fieldCropsRouter = (0, express_1.Router)();
fieldCropsRouter.post("/", field_s_crops_controller_1.createFieldCrop);
fieldCropsRouter.get("/", field_s_crops_controller_1.getAllFieldCrops);
fieldCropsRouter.delete("/:fieldId/:cropId", field_s_crops_controller_1.deleteFieldCrop);
exports.default = fieldCropsRouter;
