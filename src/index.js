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
const vehicle_router_1 = __importDefault(require("./routes/vehicle_router"));
const auth_router_1 = __importDefault(require("./routes/auth_router"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
app.use((0, cookie_parser_1.default)());
const corsOptions = {
    origin: (origin, callback) => {
        callback(null, origin || "*");
    },
    credentials: true,
};
app.use((0, cors_1.default)(corsOptions));
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json({ limit: "50mb" }));
app.use("/auth", auth_router_1.default);
app.use("/field", field_router_1.default);
app.use("/crop", crop_router_1.default);
app.use("/staff", staff_router_1.default);
app.use("/log", log_router_1.default);
app.use("/fieldCrops", field_s_crops_router_1.default);
app.use("/fieldStaff", field_s_staff_router_1.default);
app.use("/vehicle", vehicle_router_1.default);
app.get("/health", (req, res) => {
    res.status(200).json({ message: "Healthy" });
});
app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});
