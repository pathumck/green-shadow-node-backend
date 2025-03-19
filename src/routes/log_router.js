"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const log_controller_1 = require("../controller/log_controller");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const logRouter = (0, express_1.Router)();
logRouter.post("/", authMiddleware_1.authenticateUser, (0, authMiddleware_1.authorizeRole)("MANAGER", "ADMIN", "SCIENTIST"), log_controller_1.createLog);
logRouter.get("/", authMiddleware_1.authenticateUser, (0, authMiddleware_1.authorizeRole)("MANAGER", "ADMIN", "SCIENTIST"), log_controller_1.getAllLogs);
exports.default = logRouter;
