import * as dotenv from 'dotenv';

dotenv.config({
  path: '.env.development',
});

export const port = Number(process.env.PORT);
export const host = String(process.env.HOST);
export const db_host = String(process.env.DB_HOST);
export const db_port = Number(process.env.DB_PORT);
export const db_name = String(process.env.DB_NAME);
export const db_user = String(process.env.DB_USER);
export const db_password = String(process.env.DB_PASSWORD);
export const jwt_secret = String(process.env.JWT_SECRET);
