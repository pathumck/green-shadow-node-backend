"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const field_controller_1 = require("../controller/field_controller");
const fieldRouter = (0, express_1.Router)();
fieldRouter.post('/', field_controller_1.createField);
exports.default = fieldRouter;
