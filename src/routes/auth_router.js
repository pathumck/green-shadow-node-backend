"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("../controller/auth_controller");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const authRouter = express_1.default.Router();
authRouter.post("/login", auth_controller_1.login);
authRouter.post("/register", authMiddleware_1.authenticateUser, (0, authMiddleware_1.authorizeRole)("MANAGER"), auth_controller_1.register);
authRouter.put("/:id", authMiddleware_1.authenticateUser, (0, authMiddleware_1.authorizeRole)("MANAGER"), auth_controller_1.updateUser);
authRouter.delete("/:userId", authMiddleware_1.authenticateUser, (0, authMiddleware_1.authorizeRole)("MANAGER"), auth_controller_1.deleteUser);
authRouter.get("/", authMiddleware_1.authenticateUser, (0, authMiddleware_1.authorizeRole)("MANAGER", "ADMIN", "SCIENTIST"), auth_controller_1.getAllUsers);
authRouter.post("/refresh", auth_controller_1.refreshToken);
authRouter.post("/logout", auth_controller_1.logout);
exports.default = authRouter;
