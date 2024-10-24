import dotenv from "dotenv";
dotenv.config();
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from "multer-storage-cloudinary";


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'comment_images', // Thư mục lưu trữ trên Cloudinary
        allowed_formats: ['jpeg', 'png', 'jpg'],
    },
});

export {
    cloudinary,
    storage,
};
