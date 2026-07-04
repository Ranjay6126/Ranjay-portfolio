import { Router } from "express";
import { getPortfolio } from "../controllers/portfolioController.js";

const router = Router();

router.get("/", getPortfolio);

export default router;
