import { Router } from "express";

import { getOverviewController } from "../controllers/overview.controller.js";

const router = Router();

router.get("/:tag", getOverviewController);

export default router;
