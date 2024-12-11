import express from "express";
import TaskController from "../controllers/taskController.js";

const taskRouter = express.Router();

taskRouter.route("/").get(TaskController.getTaskById).post(TaskController.createTask);

export default taskRouter;
