"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const log_controller_1 = require("../controller/log_controller");
const logRouter = (0, express_1.Router)();
logRouter.post("/", log_controller_1.createLog);
logRouter.get("/", log_controller_1.getAllLogs);
exports.default = logRouter;
