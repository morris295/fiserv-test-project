import { Request, Response } from "express";

export const index = (req: Request, res: Response) => {
    let message = { "message": "Up and running!" };
    res.json(message);
};