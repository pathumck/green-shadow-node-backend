import express, { Request, Response } from "express";
import fieldRouter from "./routes/field_router";
import cropRouter from "./routes/crop_router";
import cors from "cors";
import staffRouter from "./routes/staff_router";
import logRouter from "./routes/log_router";
import fieldCropsRouter from "./routes/field's_crops_router";

const app = express();

app.use(cors());

app.use(express.json({ limit: "50mb" }));

app.use("/field", fieldRouter);
app.use("/crop", cropRouter);
app.use("/staff", staffRouter);
app.use("/log", logRouter);
app.use("/fieldCrops", fieldCropsRouter);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
