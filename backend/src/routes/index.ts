import { Router } from "express";

import healthRouter from "./health.route.js";

const router = Router();

router.use(healthRouter);

export default router;