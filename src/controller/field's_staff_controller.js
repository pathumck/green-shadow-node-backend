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
exports.getAllFieldStaff = exports.createFieldStaff = void 0;
const client_1 = require("@prisma/client");
const fieldStaffClient = new client_1.PrismaClient().fieldStaff;
const createFieldStaff = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fieldData = req.body;
        const fieldStaff = yield fieldStaffClient.create({
            data: fieldData,
        });
        res.status(200).json(fieldStaff);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.createFieldStaff = createFieldStaff;
const getAllFieldStaff = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fieldStaff = yield fieldStaffClient.findMany();
        res.status(200).json(fieldStaff);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getAllFieldStaff = getAllFieldStaff;
