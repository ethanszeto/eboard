import Connection from "../db/connection.js";
import mongoose from "mongoose";
import { Validate, date, integer, string } from "./utils.js";
import Task from "../schemas/task.js";
import TaskStatus from "../schemas/enums/taskStatus.js";
import TaskType from "../schemas/enums/taskType.js";

export default class TaskController {
  /**
   * Get Task by Id
   *
   * @param {*} req
   * @param {*} res
   */
  static async getTaskById(req, res) {
    const data = req.body;
    Validate.incoming(data, {
      id: { type: integer, required: true },
    });

    await Connection.open();
    const rawTask = await Task.findById(data.id);
    const task = rawTask.toObject();
    res.json(task);
  }

  /**
   * Create a Task
   *
   * @param {*} req
   * @param {*} res
   */
  static async createTask(req, res) {
    const data = req.body;
    Validate.incoming(
      req.body,
      {
        status: { type: string, enum: TaskStatus.listr(), default: TaskStatus.new.toString() },
        itemType: { type: string, enum: TaskType.listr(), default: TaskType.note.toString() },
        date: { type: date },
        team: { type: string, enum: Team.listr(), required: true },
        headline: { type: string, required: true },
        description: { type: string },
      },
      { override: ["creationTime", "modificationTime"] }
    );

    await Connection.open();
    const newTask = new Task(data);
    await newTask.save();
    const task = rawTask.toObject();
    res.json(task);
  }
}
