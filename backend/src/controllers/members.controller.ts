import type { NextFunction, Request, Response } from "express";

import { getMembersData } from "../services/overview/members.service.js";

type MembersParams = {
  tag: string;
};

export async function getMembersController(
  req: Request<MembersParams>,
  res: Response,
  next: NextFunction
) {
  try {
    const { tag } = req.params;

    const members = await getMembersData(tag);

    res.status(200).json(members);
  } catch (error) {
    next(error);
  }
}
