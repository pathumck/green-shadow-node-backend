import {Request, Response} from "express";
import { PrismaClient } from "@prisma/client";

const fieldClient = new PrismaClient().field;
export const createField = async (req : Request , res : Response) => {
  try {
    const fieldData = req.body;
    fieldData.id = "FD-" + crypto.randomUUID().substring(0, 8);
    const field = await fieldClient.create({
      data : fieldData,
    })
    res.status(200).json(field);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export const getAllFields = async (req : Request , res : Response) => {
  try {
    const fields = await fieldClient.findMany();
    res.status(200).json(fields);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export const updateField = async (req : Request , res : Response) => {
  try {
    const fieldData = req.body;
    const field = await fieldClient.update({
      where : {
        id : fieldData.id
      },
      data : fieldData
    })
    res.status(200).json(field);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export const deleteField = async (req : Request , res : Response) => {
  try {
    const fieldId = req.params.id;
    const field = await fieldClient.delete({
      where : {
        id : fieldId
      }
    })
    res.status(200).json(field);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}