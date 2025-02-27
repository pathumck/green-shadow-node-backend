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
exports.updateStaff = exports.getAllStaff = exports.createStaff = void 0;
const client_1 = require("@prisma/client");
const staffClient = new client_1.PrismaClient().staff;
const createStaff = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const staffData = req.body;
        staffData.id = "ST-" + crypto.randomUUID().substring(0, 8);
        const staff = yield staffClient.create({
            data: staffData,
        });
        res.status(200).json(staff);
    }
    catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
});
exports.createStaff = createStaff;
const getAllStaff = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const staff = yield staffClient.findMany();
        res.status(200).json(staff);
    }
    catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});
exports.getAllStaff = getAllStaff;
const updateStaff = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const staffData = req.body;
        const staff = yield staffClient.update({
            where: {
                id: staffData.id
            },
            data: staffData
        });
        res.status(200).json(staff);
    }
    catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
});
exports.updateStaff = updateStaff;
