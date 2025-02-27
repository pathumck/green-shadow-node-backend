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
exports.deleteCrop = exports.updateCrop = exports.getAllCrops = exports.createCrop = void 0;
const client_1 = require("@prisma/client");
const cropClient = new client_1.PrismaClient().crop;
const createCrop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cropData = req.body;
        cropData.id = "CR-" + crypto.randomUUID().substring(0, 8);
        const crop = yield cropClient.create({
            data: cropData,
        });
        res.status(200).json(crop);
    }
    catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
});
exports.createCrop = createCrop;
const getAllCrops = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const crops = yield cropClient.findMany();
        res.status(200).json(crops);
    }
    catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});
exports.getAllCrops = getAllCrops;
const updateCrop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cropData = req.body;
        const crop = yield cropClient.update({
            where: {
                id: cropData.id
            },
            data: cropData
        });
        res.status(200).json(crop);
    }
    catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
});
exports.updateCrop = updateCrop;
const deleteCrop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cropId = req.params.id;
        const crop = yield cropClient.delete({
            where: {
                id: cropId
            }
        });
        res.status(200).json(crop);
    }
    catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
});
exports.deleteCrop = deleteCrop;
