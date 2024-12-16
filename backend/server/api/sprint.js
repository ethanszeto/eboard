import express from "express";
import SprintController from "../controllers/sprintController.js";

const sprintRouter = express.Router();

/** Pregenerate `n` number of sprints for the semester */
sprintRouter.route("/pregenerate");
sprintRouter.route("/:year/:semester/:week").get(SprintController.getSprint);

export default sprintRouter;
