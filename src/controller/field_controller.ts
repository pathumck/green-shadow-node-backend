import {Request, Response} from "express";
import { PrismaClient } from "@prisma/client";

const fieldClient = new PrismaClient().field;
export const createField = async (req : Request , res : Response) => {
  try {
    const fieldData = req.body;
    fieldData.id = "FD-" + crypto.randomUUID();
    const field = await fieldClient.create({
      data : fieldData,
    })
    res.status(200).json(field);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}