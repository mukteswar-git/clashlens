import { Router } from "express";
import { getClanController } from "../controllers/clan.controller.js";

const router = Router();

router.get("/:tag", getClanController);

export default router;
