import mongoose from "mongoose";
import SprintStatus from "./enums/sprintStatus.js";
import Semester from "./enums/semester.js";
import Task from "./task.js";

const Schema = mongoose.Schema;

const SprintSchema = new Schema(
  {
    name: { type: String },
    week: { type: Number, required: true },
    year: { type: Number, required: true },
    semester: { type: String, enum: Semester.listr(), required: true },
    status: { type: String, enum: SprintStatus.listr() },
    tasks: [{ type: Schema.Types.ObjectId, ref: Task }],
    creationTime: { type: Date, required: true },
    modificationTime: { type: Date, required: true },
  },
  {
    collection: "sprints",
  }
);

SprintSchema.index({ week: 1, semester: 1, year: 1 });

const db = mongoose.connection.useDb("eboard");
const Sprint = db.model("Sprints", SprintSchema);

export default Sprint;
