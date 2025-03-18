"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.refreshToken = exports.getAllUsers = exports.deleteUser = exports.updateUser = exports.login = exports.register = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const client_1 = require("@prisma/client");
const jwt_1 = require("../utils/jwt");
const prisma = new client_1.PrismaClient();
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.body.user.role !== "MANAGER") {
            return res.status(403).json({ message: "Only MANAGER can create users" });
        }
        const hashedPassword = yield bcryptjs_1.default.hash(req.body.password, 10);
        const isExistingUser = yield prisma.user.findUnique({
            where: { username: req.body.username },
        });
        if (isExistingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const user = yield prisma.user.create({
            data: {
                id: "US-" + crypto.randomUUID().substring(0, 8),
                username: req.body.username,
                password: hashedPassword,
                role: req.body.role,
            },
        });
        res
            .status(201)
            .json({ id: user.id, username: user.username, role: user.role });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield prisma.user.findUnique({
            where: { username: req.body.username },
        });
        if (!user || !(yield bcryptjs_1.default.compare(req.body.password, user.password))) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const accessToken = (0, jwt_1.generateAccessToken)({ id: user.id, role: user.role });
        const refreshToken = (0, jwt_1.generateRefreshToken)({ id: user.id, role: user.role });
        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 15 * 60 * 1000,
        });
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        res.json({ id: user.id, role: user.role });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.login = login;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.body.user.role !== "MANAGER") {
            return res.status(403).json({ message: "Only MANAGER can update users" });
        }
        const userNameExists = yield prisma.user.findUnique({
            where: { username: req.body.username },
        });
        if (userNameExists && userNameExists.id !== req.params.id) {
            return res.status(400).json({ message: "Username already exists" });
        }
        const hashedPassword = yield bcryptjs_1.default.hash(req.body.password, 10);
        yield prisma.user.update({
            where: { id: req.params.id },
            data: {
                username: req.body.username,
                password: hashedPassword,
                role: req.body.role,
            },
        });
        res.status(200).json({ message: "User updated successfully" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.body.user.role !== "MANAGER") {
            return res
                .status(403)
                .json({ message: "Only MANAGER can delete accounts" });
        }
        if (req.body.user.id === req.params.userId) {
            return res.status(400).json({ message: "You cannot delete yourself" });
        }
        const { userId } = req.params;
        yield prisma.user.delete({ where: { id: userId } });
        res.json({ message: "User deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.deleteUser = deleteUser;
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield prisma.user.findMany();
        const usersWithoutPassword = users.map((user) => {
            return {
                id: user.id,
                username: user.username,
                role: user.role,
            };
        });
        res.json(usersWithoutPassword);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getAllUsers = getAllUsers;
const refreshToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
        return res.status(401).json({ message: "No refresh token provided" });
    }
    try {
        const decoded = (0, jwt_1.verifyRefreshToken)(refreshToken);
        const user = yield prisma.user.findUnique({
            where: { id: decoded.id },
        });
        if (!user) {
            return res.status(401).json({ message: "User no longer exists." });
        }
        const newAccessToken = (0, jwt_1.generateAccessToken)({
            id: decoded.id,
            role: decoded.role,
        });
        res.cookie("accessToken", newAccessToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 15 * 60 * 1000,
        });
        res.json({ message: "Token refreshed" });
    }
    catch (error) {
        return res
            .status(403)
            .json({ message: "Invalid or expired refresh token" });
    }
});
exports.refreshToken = refreshToken;
const logout = (req, res) => {
    res.clearCookie("accessToken", {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
    });
    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
    });
    res.status(200).json({ message: "Logged out successfully" });
};
exports.logout = logout;
