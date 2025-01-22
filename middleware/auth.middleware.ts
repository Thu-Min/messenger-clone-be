import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt.utils';
import { IUser } from '../modules/User/interfaces/user.interface';
import { jwt_secret } from '../config/config';

interface AuthRequest extends Request {
  userId?: string;
}

const authenticateToken = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    res.sendStatus(401);

    return;
  }

  try {
    const decoded = verifyToken(token) as { userId: string };

    req.userId = decoded.userId;

    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });

    return;
  }
};

export default authenticateToken;
