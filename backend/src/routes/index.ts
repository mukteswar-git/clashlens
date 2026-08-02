import { Router } from "express";
import healthRouter from "./health.route.js";
import clanRouter from "./clan.route.js";

const router = Router();

router.use("/health", healthRouter);
router.use("/clan", clanRouter);

export default router;
