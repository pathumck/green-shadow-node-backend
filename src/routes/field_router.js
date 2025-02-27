"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const field_controller_1 = require("../controller/field_controller");
const fieldRouter = (0, express_1.Router)();
fieldRouter.post('/', field_controller_1.createField);
fieldRouter.get('/', field_controller_1.getAllFields);
fieldRouter.put('/:id', field_controller_1.updateField);
exports.default = fieldRouter;
