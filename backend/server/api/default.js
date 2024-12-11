import express from "express";

const defaultRouter = express.Router();

defaultRouter.route("/").get((req, res) => {
  res.json({ message: "Backend Request Served" });
});

defaultRouter.route("/db").get(async (req, res) => {
  //make some call to the database
});

export default defaultRouter;
