import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: './upload',
    filename(req, file, cb) {
      cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    },
  });
  
  const upload = multer({ storage }).single('file');
export const fileUpload = (req, res) => {
    upload(req, res, (err) => {
        if (err instanceof multer.MulterError) {
          res.status(404).send(err);
          // A Multer error occurred when uploading.
        } else if (err) {
          res.status(404).send(err);
          // An unknown error occurred when uploading.
        } else {
          res.status(200).send();
        }
        // Everything went fine.
      });
}
/**
 * 
 * @todo implement the download  
 */
export const fileDownload = (req, res) => {
    res.status(200).download('upload/file-1543271588556-.mp3', 'music.mp3');
    
}