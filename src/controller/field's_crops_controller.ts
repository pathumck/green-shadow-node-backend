import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const fieldCropClient = new PrismaClient().fieldCrop;

export const createFieldCrop = async (req: Request, res: Response) => {
  try {
    const fieldData = req.body;
    const fieldCrop = await fieldCropClient.create({
      data: fieldData,
    });
    res.status(200).json(fieldCrop);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getAllFieldCrops = async (req: Request, res: Response) => {
  try {
    const fieldCrops = await fieldCropClient.findMany();
    res.status(200).json(fieldCrops);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteFieldCrop = async (req: Request, res: Response) => {
  try {
    const fieldCrop = await fieldCropClient.delete({
      where: {
        fieldId_cropId: {
          fieldId: req.params.fieldId,
          cropId: req.params.cropId,
        },
      },
    });
    res.status(200).json(fieldCrop);
  } catch (error) {
    res.status(500).json(error);
  }
};
