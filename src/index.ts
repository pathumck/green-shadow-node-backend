import express, { Request, Response } from "express";
import fieldRouter from "./routes/field_router";
import cropRouter from "./routes/crop_router";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json({ limit: "50mb" }));

app.use("/field", fieldRouter);
app.use("/crop", cropRouter);
app.get("/", (req : Request , res : Response) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});