import { Router } from "express";
import { getClanController } from "../controllers/clan.controller.js";
import { validate } from "../middleware/validate.js";
import { clanTagSchema } from "../schema/clan.schema.js";

const router = Router();

/**
 * @openapi
 * /clan/{tag}:
 *   get:
 *     summary: Get clan details
 *     description: Retrieves information about a Clash of Clans clan using its tag.
 *     tags:
 *       - Clan
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
 *         description: Clan retrieved successfully.
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
router.get("/:tag", validate(clanTagSchema), getClanController);

export default router;
