import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const logClient = new PrismaClient().log;

export const createLog = async (req: Request, res: Response) => {
  try {
    const logData = req.body;
    logData.id = "LG-" + crypto.randomUUID().substring(0, 8);
    logData.date = new Date().toISOString().split("T")[0];
    const log = await logClient.create({
      data: logData,
    });
    res.status(200).json(log);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
