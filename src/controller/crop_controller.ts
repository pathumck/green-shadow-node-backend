import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const cropClient = new PrismaClient().crop

export const createCrop = async (req : Request , res : Response) => {
  try {
    const cropData = req.body;
    cropData.id = "CR-" + crypto.randomUUID().substring(0, 8);
    const crop = await cropClient.create({
      data : cropData,
    })
    res.status(200).json(crop);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export const getAllCrops = async (req : Request , res : Response) => {
  try {
    const crops = await cropClient.findMany();
    res.status(200).json(crops);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export const updateCrop = async (req : Request , res : Response) => {
  try {
    const cropData = req.body;
    const crop = await cropClient.update({
      where : {
        id : cropData.id
      },
      data : cropData
    })
    res.status(200).json(crop);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export const deleteCrop = async (req : Request , res : Response) => {
  try {
    const cropId = req.params.id;
    const crop = await cropClient.delete({
      where : {
        id : cropId
      }
    })
    res.status(200).json(crop);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}