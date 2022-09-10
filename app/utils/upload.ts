import multer from 'multer'
import { Request } from 'express'
import path from 'path';

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../../uploads/'),
    filename: (req: Request, file: any, cb: Function) => {
        if (file) {
            cb(null, `${Date.now()}-${file.originalname}`)
        }
    },
});

const fileFilter = (req: Request, file: any, cb: Function) => {
    if (file) {
        if (
            file.mimetype === "image/jpeg" || 
            file.mimetype === "image/png" 
        ) {
            cb(null, true);
        } else {
            cb(new Error("Please select right image format"), false);
        }
    }
};

export const upload = multer({storage: storage, fileFilter: fileFilter}).single('image');