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
exports.deleteEquipment = exports.updateEquipment = exports.getAllEquipment = exports.createEquipment = void 0;
const client_1 = require("@prisma/client");
const equipmentClient = new client_1.PrismaClient().equipment;
const createEquipment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const equipmentData = req.body;
        req.body.id = "EQ-" + crypto.randomUUID().substring(0, 8);
        const equipment = yield equipmentClient.create({
            data: equipmentData,
        });
        res.status(200).json(equipment);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.createEquipment = createEquipment;
const getAllEquipment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const equipment = yield equipmentClient.findMany();
        res.status(200).json(equipment);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getAllEquipment = getAllEquipment;
const updateEquipment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const equipmentData = req.body;
        const equipment = yield equipmentClient.update({
            where: {
                id: equipmentData.id,
            },
            data: equipmentData,
        });
        res.status(200).json(equipment);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.updateEquipment = updateEquipment;
const deleteEquipment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const equipmentId = req.params.id;
        const equipment = yield equipmentClient.delete({
            where: {
                id: equipmentId,
            },
        });
        res.status(200).json(equipment);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.deleteEquipment = deleteEquipment;
