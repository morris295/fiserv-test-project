import { ParserServiceV1 } from "../services/ParserServiceV1";
import { ParserServiceV2 } from "../services/ParserServiceV2";
import { Request, Response } from "express";

export const parseV1 = (req: Request, res: Response) => {
    const parserServiceV1 = new ParserServiceV1();
    
    const result = parserServiceV1.parse(req.body.data);

    res.json(result);
};

export const parseV2 = (req: Request, res: Response) => {
    const parserServiceV2 = new ParserServiceV2();

    const result = parserServiceV2.parse(req.body.data);

    res.json(result);
};