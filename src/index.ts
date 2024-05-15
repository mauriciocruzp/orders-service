import express from "express";
import dotenv from "dotenv";
import { Signale } from "signale";
import morgan from "morgan";
import syncConnection from "./database/mysql/connection";
import { } from "../tsconfig.json";
import cors from "cors";
import { orderRouter } from "./infrastructure/routers/order.router";
// import { router } from "./infrastructure/routes/router";

export const app = express();
const logger = new Signale();

dotenv.config();
app.use(express.json());
app.use(morgan("dev"));

const PORT = process.env.PORT || 3001;

app.options("*", cors())
app.use(cors())

app.use("/", orderRouter);

async function startServer() {
    await syncConnection();
    app.listen(PORT, () => {
        logger.success(`Server running on http://localhost:${PORT}$`);
    });
}

startServer();
