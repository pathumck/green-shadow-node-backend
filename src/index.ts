import express, { Request, Response } from "express";
import fieldRouter from "./routes/field_router";
import cropRouter from "./routes/crop_router";
import cors from "cors";
import staffRouter from "./routes/staff_router";
import logRouter from "./routes/log_router";
import fieldCropsRouter from "./routes/field's_crops_router";
import fieldStaffRouter from "./routes/field's_staff_router";
import vehicleRouter from "./routes/vehicle_router";
import authRouter from "./routes/auth_router";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());

const corsOptions = {
  origin: (origin: any, callback: any) => {
    callback(null, origin || "*");
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.use(cors(corsOptions));

app.use(express.json({ limit: "50mb" }));
app.use("/auth", authRouter);
app.use("/field", fieldRouter);
app.use("/crop", cropRouter);
app.use("/staff", staffRouter);
app.use("/log", logRouter);
app.use("/fieldCrops", fieldCropsRouter);
app.use("/fieldStaff", fieldStaffRouter);
app.use("/vehicle", vehicleRouter);
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ message: "Healthy" });
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
