import type { NextFunction, Request, Response } from "express";

import { getOverviewData } from "../services/overview/overview.service.js";

type OverviewParams = {
  tag: string;
};

export async function getOverviewController(
  req: Request<OverviewParams>,
  res: Response,
  next: NextFunction
) {
  try {
    const { tag } = req.params;

    const overview = await getOverviewData(tag);

    res.status(200).json(overview);
  } catch (error) {
    next(error);
  }
}
