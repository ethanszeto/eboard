import express from "express";

const sprintController = express.Router();

/** Pregenerate `n` number of sprints for the semester */
sprintController.route("/pregenerate")

export default sprintController;
