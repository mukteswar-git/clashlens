import { Router } from "express";

import { getMembersController } from "../controllers/members.controller.js";

const router = Router();

/**
 * @openapi
 * /members/{tag}:
 *   get:
 *     summary: Get clan members
 *     description: Retrieves the list of clan members along with their statistics and comparison metrics.
 *     tags:
 *       - Members
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
 *         description: Clan members retrieved successfully.
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
router.get("/:tag", getMembersController);

export default router;
