import express from "express";

const defaultRouter = express.Router();

defaultRouter.route("/").get((req, res) => {
  res.json({ message: "Backend Request Served" });
});

export default defaultRouter;
