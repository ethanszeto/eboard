import mongoose from "mongoose";
import TaskStatus from "./enums/taskStatus.js";
import Team from "./enums/team.js";
import TaskType from "./enums/taskType.js";

const Schema = mongoose.Schema;

const TaskSchema = new Schema(
  {
    status: { type: String, enum: TaskStatus.listr(), required: true },
    team: { type: String, enum: Team.listr(), required: true },
    headline: { type: String, required: true },
    description: { type: String },
    itemType: { type: String, enum: TaskType.listr(), required: true },
    date: { type: Date },
    creationTime: { type: Date, required: true },
    modificationTime: { type: Date, required: true },
  },
  {
    collection: "tasks",
  }
);
const db = mongoose.connection.useDb("eboard");
const Task = db.model("Tasks", TaskSchema);

export default Task;
