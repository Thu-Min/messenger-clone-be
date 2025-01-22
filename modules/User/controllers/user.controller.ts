import { Request, Response } from 'express';
import { getUserById, updateUser } from '../services/user.service';

export const getUser = async (req: any, res: Response) => {
  try {
    const id = req.userId;

    const user = await getUserById(id);

    res.status(200).json({
      success: true,
      message: 'User retrieved successfully',
      data: user,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const editUser = async (req: any, res: Response) => {
  try {
    const id = req.userId;
    const data = req.body;

    const user = await updateUser(id, data);

    res.status(200).json({
      success: true,
      message: 'User updated successfully',
      data: user,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const uploadProfilePicture = async (req: any, res: Response) => {
  try {
    const id = req.userId;

    if (!req.file) {
      res.status(400).json({
        success: false,
        message: 'No file uploaded',
      });
    }

    const profilePictureUrl = `${req.protocol}://${req.get(
      'host'
    )}/uploads/user/upload/${req.file.filename}`;

    const user = await updateUser(id, { profile_picture: profilePictureUrl });

    res.status(200).json({
      success: true,
      message: 'Profile picture uploaded successfully',
      data: user,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
