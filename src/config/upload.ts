import { Multer } from 'multer';
import multer = require('multer');
import path = require('path');

export default {
    storage: multer.diskStorage({
        destination: path.join(__dirname, '..','..','uploads'),
        filename: (request, file, cb) => {
            const filename = `${Date.now()}-${file.originalname}`

            cb(null, filename);
        }
    })
}