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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllLogs = exports.createLog = void 0;
const client_1 = require("@prisma/client");
const logClient = new client_1.PrismaClient().log;
const createLog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const logData = req.body;
        logData.id = "LG-" + crypto.randomUUID().substring(0, 8);
        logData.date = new Date().toISOString().split("T")[0];
        const log = yield logClient.create({
            data: logData,
        });
        res.status(200).json(log);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.createLog = createLog;
const getAllLogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const logs = yield logClient.findMany();
        res.status(200).json(logs);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getAllLogs = getAllLogs;
