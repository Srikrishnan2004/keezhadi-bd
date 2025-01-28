import express from "express";
import { getArtifacts } from "../controllers/artifacts.controller.js";

const artifactsRouter = express.Router();

artifactsRouter.get("/getArtifacts", getArtifacts);

export default artifactsRouter;
