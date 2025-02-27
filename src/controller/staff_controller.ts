import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const staffClient = new PrismaClient().staff

export const createStaff = async (req : Request , res : Response) => {
  try {
    const staffData = req.body;
    staffData.id = "ST-" + crypto.randomUUID().substring(0, 8);
    const staff = await staffClient.create({
      data : staffData,
    })
    res.status(200).json(staff);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export const getAllStaff = async (req : Request , res : Response) => {
  try {
    const staff = await staffClient.findMany();
    res.status(200).json(staff);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export const updateStaff = async (req : Request , res : Response) => {
  try {
    const staffData = req.body;
    const staff = await staffClient.update({
      where : {
        id : staffData.id
      },
      data : staffData
    })
    res.status(200).json(staff);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}