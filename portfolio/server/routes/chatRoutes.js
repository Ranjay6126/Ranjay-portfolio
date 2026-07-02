import { Router } from "express";
import { sendChatMessage } from "../controllers/chatController.js";

const router = Router();

router.post("/", sendChatMessage);

export default router;
