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
exports.deleteFieldCrop = exports.getAllFieldCrops = exports.createFieldCrop = void 0;
const client_1 = require("@prisma/client");
const fieldCropClient = new client_1.PrismaClient().fieldCrop;
const createFieldCrop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fieldData = req.body;
        const fieldCrop = yield fieldCropClient.create({
            data: fieldData,
        });
        res.status(200).json(fieldCrop);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.createFieldCrop = createFieldCrop;
const getAllFieldCrops = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fieldCrops = yield fieldCropClient.findMany();
        res.status(200).json(fieldCrops);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getAllFieldCrops = getAllFieldCrops;
const deleteFieldCrop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fieldCrop = yield fieldCropClient.delete({
            where: {
                fieldId_cropId: {
                    fieldId: req.params.fieldId,
                    cropId: req.params.cropId,
                },
            },
        });
        res.status(200).json(fieldCrop);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.deleteFieldCrop = deleteFieldCrop;
