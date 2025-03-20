import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const equipmentClient = new PrismaClient().equipment;
export const createEquipment = async (req: Request, res: Response) => {
  try {
    const equipmentData = req.body;
    req.body.id = "EQ-" + crypto.randomUUID().substring(0, 8);
    const equipment = await equipmentClient.create({
      data: equipmentData,
    });
    res.status(200).json(equipment);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getAllEquipment = async (req: Request, res: Response) => {
  try {
    const equipment = await equipmentClient.findMany();
    res.status(200).json(equipment);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateEquipment = async (req: Request, res: Response) => {
  try {
    const equipmentData = req.body;
    const equipment = await equipmentClient.update({
      where: {
        id: equipmentData.id,
      },
      data: equipmentData,
    });
    res.status(200).json(equipment);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const deleteEquipment = async (req: Request, res: Response) => {
  try {
    const equipmentId = req.params.id;
    const equipment = await equipmentClient.delete({
      where: {
        id: equipmentId,
      },
    });
    res.status(200).json(equipment);
  } catch (error) {
    res.status(400).json(error);
  }
};
