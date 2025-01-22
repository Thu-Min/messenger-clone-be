import multer from 'multer';
import path from 'path';
import fs from 'fs';

/**
 * Dynamic storage path/ folder name for modular structure
 * @param folderName - Name of the module folder (e.g., 'user', 'chat', etc.)
 */
const dynamicStorage = (folderName: string) => {
  return multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadPath = path.join(
        __dirname,
        `../modules/${folderName}/upload`
      );
      fs.mkdirSync(uploadPath, { recursive: true }); // Ensure folder exists
      cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, uniqueSuffix + path.extname(file.originalname));
    },
  });
};

/**
 * Resuable upload middleware
 * @param folderName
 */
export const uploadMiddleware = (folderName: string) => {
  return multer({
    storage: dynamicStorage(folderName),
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
    fileFilter: (req, file, cb) => {
      const allowedTypes = /jpeg|jpg|png/;
      const isValid =
        allowedTypes.test(path.extname(file.originalname).toLowerCase()) &&
        allowedTypes.test(file.mimetype);

      isValid ? cb(null, true) : cb(new Error('Invalid file type'));
    },
  });
};
