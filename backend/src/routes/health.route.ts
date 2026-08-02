import { Router } from "express";
import { getHealth } from "../controllers/health.controller.js";

const router = Router();

/**
 * @openapi
 * /health:
 *   get:
 *     summary: Health check
 *     description: Returns the current status of the backend server.
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: Server is running successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: Current status of the backend.
 *                   example: ok
 *                 environment:
 *                   type: string
 *                   description: Current application environment.
 *                   example: development
 */
router.get("/", getHealth);

export default router;
