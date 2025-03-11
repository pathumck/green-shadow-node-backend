"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const field_router_1 = __importDefault(require("./routes/field_router"));
const crop_router_1 = __importDefault(require("./routes/crop_router"));
const cors_1 = __importDefault(require("cors"));
const staff_router_1 = __importDefault(require("./routes/staff_router"));
const log_router_1 = __importDefault(require("./routes/log_router"));
const field_s_crops_router_1 = __importDefault(require("./routes/field's_crops_router"));
const field_s_staff_router_1 = __importDefault(require("./routes/field's_staff_router"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: "50mb" }));
app.use("/field", field_router_1.default);
app.use("/crop", crop_router_1.default);
app.use("/staff", staff_router_1.default);
app.use("/log", log_router_1.default);
app.use("/fieldCrops", field_s_crops_router_1.default);
app.use("/fieldStaff", field_s_staff_router_1.default);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});
