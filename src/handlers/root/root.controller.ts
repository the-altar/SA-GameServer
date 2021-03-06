import { Request, Response } from "express"
import { pool } from "../../db"

export const baseController = async (req: Request, res: Response) => {
    return res.sendFile('index.html', { root: './public/main' });
}

export const uploadController = async (req: Request, res: Response) => {
    return res.json([{ "url": "/absolute/path/to/filename.png" }]);
}



