import { Router } from "express";

import { getOverviewController } from "../controllers/overview.controller.js";
import { validate } from "../middleware/validate.js";
import { clanTagSchema } from "../schema/clan.schema.js";

const router = Router();

/**
 * @openapi
 * /overview/{tag}:
 *   get:
 *     summary: Get clan overview
 *     description: Retrieves overview statistics and analytics for a Clash of Clans clan.
 *     tags:
 *       - Overview
 *     parameters:
 *       - in: path
 *         name: tag
 *         required: true
 *         description: Enter the clan tag beginning with "#". Swagger automatically URL-encodes the value.
 *         schema:
 *           type: string
 *           example: "#2RQJ20G2P"
 *     responses:
 *       "200":
 *         description: Clan overview retrieved successfully.
 *       "400":
 *         description: Invalid clan tag.
 *       "403":
 *         description: Access to the Clash of Clans API is forbidden.
 *       "404":
 *         description: Clan not found.
 *       "429":
 *         description: Clash of Clans API rate limit exceeded.
 *       "503":
 *         description: Clash of Clans API is currently unavailable.
 */
router.get("/:tag", validate(clanTagSchema), getOverviewController);

export default router;
