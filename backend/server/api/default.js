import express from "express";
//
import Sprint from "../schemas/sprint.js";
import Connection from "../db/connection.js";

const defaultRouter = express.Router();

defaultRouter.route("/").get((req, res) => {
  res.json({ message: "Backend Request Served" });
});

defaultRouter.route("/db").get(async (req, res) => {
  //some database request
});

export default defaultRouter;
