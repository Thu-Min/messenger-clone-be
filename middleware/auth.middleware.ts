import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt.utils';
import { IUser } from '../modules/User/interfaces/user.interface';

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    res.sendStatus(401);

    return;
  }

  try {
    const decoded = verifyToken(token);

    // TODO: Add user to request object
    (req as Request & { user?: IUser }).user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });

    return;
  }
};

export default authenticateToken;
