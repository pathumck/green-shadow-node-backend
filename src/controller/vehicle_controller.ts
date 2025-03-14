import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const vehiclClient = new PrismaClient().vehicle;

export const createVehicle = async (req: Request, res: Response) => {
  try {
    const newVehicle = req.body;
    newVehicle.id = "VE-" + crypto.randomUUID().substring(0, 8);
    const isExist = await vehiclClient.findUnique({
      where: { number: newVehicle.number },
    });
    if (isExist) {
      res.status(400).json({ message: "Vehicle with number : " + newVehicle.number + " already exists." });
      return;
    }
    const vehicle = await vehiclClient.create({
      data: newVehicle,
    });
    res.status(200).json(vehicle);
  } catch (error) {
    res.status(400).json({message : "Internal server error."});
  }
};

export const getAllVehicles = async (req:Request, res: Response)=> {
  try {
    const vehicles = await vehiclClient.findMany()
    res.status(200).json(vehicles)
  } catch(error) {
    res.status(400).json({message : "Internal server error."})
  }
}

export const updateVehicle = async (req : Request , res : Response) => {
  try {
    const vehicleData = req.body;
    const vehicle = await vehiclClient.update({
      where : {
        id : vehicleData.id
      },
      data : vehicleData
    })
    res.status(200).json(vehicle);
  } catch (error) {
    res.status(400).json({message : "Internal server error."})
  }
}
