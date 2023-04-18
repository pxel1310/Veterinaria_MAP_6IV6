import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const MYSQL_USER: string = process.env.MYSQL_USER!;
const MYSQL_PASSWORD: string = process.env.MYSQL_PASSWORD!;
const MYSQL_HOST: string = process.env.MYSQL_HOST!;
const MYSQL_PORT: number = Number(process.env.MYSQL_PORT!);
const MYSQL_DATABASE: string = process.env.MYSQL_DATABASE!;

const dbConnection = new Sequelize({
  dialect: "mysql",
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  username: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
});

export default dbConnection;
