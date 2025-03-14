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
exports.updateVehicle = exports.getAllVehicles = exports.createVehicle = void 0;
const client_1 = require("@prisma/client");
const vehiclClient = new client_1.PrismaClient().vehicle;
const createVehicle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newVehicle = req.body;
        newVehicle.id = "VE-" + crypto.randomUUID().substring(0, 8);
        const isExist = yield vehiclClient.findUnique({
            where: { number: newVehicle.number },
        });
        if (isExist) {
            res.status(400).json({ message: "Vehicle with number : " + newVehicle.number + " already exists." });
            return;
        }
        const vehicle = yield vehiclClient.create({
            data: newVehicle,
        });
        res.status(200).json(vehicle);
    }
    catch (error) {
        res.status(400).json({ message: "Internal server error." });
    }
});
exports.createVehicle = createVehicle;
const getAllVehicles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const vehicles = yield vehiclClient.findMany();
        res.status(200).json(vehicles);
    }
    catch (error) {
        res.status(400).json({ message: "Internal server error." });
    }
});
exports.getAllVehicles = getAllVehicles;
const updateVehicle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const vehicleData = req.body;
        const vehicle = yield vehiclClient.update({
            where: {
                id: vehicleData.id
            },
            data: vehicleData
        });
        res.status(200).json(vehicle);
    }
    catch (error) {
        res.status(400).json({ message: "Internal server error." });
    }
});
exports.updateVehicle = updateVehicle;
