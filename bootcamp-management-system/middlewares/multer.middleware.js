import multer from 'multer';

const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, './public/uploads');
   },
   filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + file.originalname;
      cb(null, uniqueSuffix)

   }
})

const fileFilter = (req, file, cb) => {
   if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'
      || file.mimetype === 'image/jpg') {
      cb(null, true);
   } else {
      cb(new Error("Invalid FIle type. Only image is allowed."))
   }
}

export const upload = multer({
   storage,
   limits: {
      //5 mb max size
      fileSize: 5 * 1024 * 1024
   },
   fileFilter
})
