import { Router } from "express";

import { getMembersController } from "../controllers/members.controller.js";

const router = Router();

router.get("/:tag", getMembersController);

export default router;
