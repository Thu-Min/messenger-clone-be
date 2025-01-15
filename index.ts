import modules from "./modules";
import express from "express";
import { host, port } from "./config/config";

const app = express();

app.use(express.json({ limit: "50mb" }));

app.use(
  express.urlencoded({
    extended: true,
    limit: "50mb",
  })
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

modules(app);

app.listen(port, () => {
  console.log(
    `app is running on HOST: ${host} and PORT: ${port} | http://${host}:${port}`
  );
});
