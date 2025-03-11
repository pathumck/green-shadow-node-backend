"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const field_s_staff_controller_1 = require("../controller/field's_staff_controller");
const fieldStaffRouter = (0, express_1.Router)();
fieldStaffRouter.post("/", field_s_staff_controller_1.createFieldStaff);
fieldStaffRouter.get("/", field_s_staff_controller_1.getAllFieldStaff);
fieldStaffRouter.delete("/:fieldId/:staffId", field_s_staff_controller_1.deleteFieldStaff);
exports.default = fieldStaffRouter;
