import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const fieldStaffClient = new PrismaClient().fieldStaff;

export const createFieldStaff = async (req: Request, res: Response) => {
  try {
    const fieldData = req.body;
    const fieldStaff = await fieldStaffClient.create({
      data: fieldData,
    });
    res.status(200).json(fieldStaff);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getAllFieldStaff = async (req: Request, res: Response) => {
  try {
    const fieldStaff = await fieldStaffClient.findMany();
    res.status(200).json(fieldStaff);
  } catch (error) {
    res.status(500).json(error);
  }
};