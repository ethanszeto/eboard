import Sprint from "../server/schemas/sprint.js";
import Task from "../server/schemas/task.js";

import sprintSeed from "./seed/sprint.seed.js";
import taskSeed from "./seed/task.seed.js";

export default [
  { model: Sprint, seed: sprintSeed },
  { model: Task, seed: taskSeed },
];
