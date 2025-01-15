import express, { NextFunction, Request, Response } from "express";

const router = express.Router();

router.get("/test", (req: Request, res: Response) =>
  console.log("Hello World")
);

export default router;
