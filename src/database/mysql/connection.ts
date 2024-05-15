import dontenv from "dotenv";
import { Sequelize } from "sequelize-typescript";
import signale from "signale";

dontenv.config();

const syncModels = async () => {
    const sequelize = new Sequelize({
        dialect: "mysql",
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
        models: [__dirname + "/**/**/*.model.ts"],
    })
    try {
        await sequelize.sync();
        signale.success("Models synchronized successfully");
    } catch (error) {
        signale.error(error);
    }
}

export default syncModels;
