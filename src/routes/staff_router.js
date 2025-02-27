"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const staff_controller_1 = require("../controller/staff_controller");
const staffRouter = (0, express_1.Router)();
staffRouter.post("/", staff_controller_1.createStaff);
staffRouter.get("/", staff_controller_1.getAllStaff);
staffRouter.put("/:id", staff_controller_1.updateStaff);
exports.default = staffRouter;
