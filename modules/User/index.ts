import { Express } from "express";
import router from "./routes";

export default (app: Express) => {
  app.use("/api/v1", router);
};
