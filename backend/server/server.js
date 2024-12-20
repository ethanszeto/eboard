import express from "express";
import cors from "cors";
import helmet from "helmet";
import defaultRouter from "./api/default.js";
import taskRouter from "./api/task.js";
import sprintRouter from "./api/sprint.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use(cookieParser());

server.use("/", defaultRouter);
server.use("/tasks", taskRouter);
server.use("/sprints", sprintRouter);

export default server;
