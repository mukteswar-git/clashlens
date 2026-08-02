import type { Request, Response, NextFunction } from "express";
import { getClan } from "../services/coc/clan.js";

type ClanParams = {
  tag: string;
};

export async function getClanController(
  req: Request<ClanParams>,
  res: Response,
  next: NextFunction
) {
  try {
    const { tag } = req.params;

    const clan = await getClan(tag);

    res.json(clan);
  } catch (error) {
    next(error);
  }
}
