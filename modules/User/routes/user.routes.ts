import { Router } from 'express';
import {
  getUser,
  editUser,
  uploadProfilePicture,
} from '../controllers/user.controller';
import authenticateToken from '../../../middleware/auth.middleware';
import { uploadMiddleware } from '../../../middleware/upload.middleware';

const router = Router();
const upload = uploadMiddleware('user');

router.get('/profile', authenticateToken, getUser);
router.put('/:id', authenticateToken, editUser);
router.post(
  '/upload',
  authenticateToken,
  upload.single('file'),
  uploadProfilePicture
);

export default router;
