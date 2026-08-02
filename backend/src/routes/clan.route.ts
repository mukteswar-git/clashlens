import { Router } from "express";
import { getClanController } from "../controllers/clan.controller.js";
import { validate } from "../middleware/validate.js";
import { clanTagSchema } from "../schema/clan.schema.js";

const router = Router();

router.get("/:tag", validate(clanTagSchema), getClanController);

export default router;
