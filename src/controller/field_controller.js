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
exports.deleteField = exports.updateField = exports.getAllFields = exports.createField = void 0;
const client_1 = require("@prisma/client");
const fieldClient = new client_1.PrismaClient().field;
const createField = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fieldData = req.body;
        fieldData.id = "FD-" + crypto.randomUUID().substring(0, 8);
        const field = yield fieldClient.create({
            data: fieldData,
        });
        res.status(200).json(field);
    }
    catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
});
exports.createField = createField;
const getAllFields = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fields = yield fieldClient.findMany();
        res.status(200).json(fields);
    }
    catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});
exports.getAllFields = getAllFields;
const updateField = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fieldData = req.body;
        const field = yield fieldClient.update({
            where: {
                id: fieldData.id
            },
            data: fieldData
        });
        res.status(200).json(field);
    }
    catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
});
exports.updateField = updateField;
const deleteField = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fieldId = req.params.id;
        const field = yield fieldClient.delete({
            where: {
                id: fieldId
            }
        });
        res.status(200).json(field);
    }
    catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
});
exports.deleteField = deleteField;
