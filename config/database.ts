import { db_host, db_port, db_name, db_user, db_password } from "./config";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(db_name, db_user, db_password, {
  host: db_host,
  port: Number(db_port),
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then((res) => {
    console.log("Connection has been established successfully.");
  })
  .catch((error: any) => {
    console.error("Unable to connect to the database:", error);
  });

sequelize
  .sync({ alter: true }) // or use { force: true } for fresh creation
  .then(() => console.log("Database synced!"))
  .catch((err) => console.error("Database sync failed:", err));

export default sequelize;
