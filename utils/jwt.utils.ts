import jwt from 'jsonwebtoken';
import { jwt_secret } from '../config/config';

export const generateToken = (userId: string): string => {
  return jwt.sign({ userId: userId }, jwt_secret, { expiresIn: '1h' });
};

export const verifyToken = (token: string): any => {
  return jwt.verify(token, jwt_secret);
};
