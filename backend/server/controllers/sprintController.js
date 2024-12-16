import { Validate, integer, string } from "./utils.js";
import Connection from "../db/connection.js";
import Sprint from "../schemas/sprint.js";
import Semester from "../schemas/enums/semester.js";

export default class SprintController {
  static async getSprint(req, res) {
    const data = req.params;
    Validate.incoming(data, {
      week: { type: integer, required: true },
      semester: { type: string, enum: Semester.listr(), required: true },
      year: { type: integer, required: true },
    });
    await Connection.open();
    const rawSprint = await Sprint.findOne(data).populate("tasks");
    const sprint = rawSprint.toObject();
    res.json(sprint);
  }
}
