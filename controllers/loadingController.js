import multer from 'multer';
import { fileload } from '../models';
import uuid from 'uuid-v4';
import path from 'path';

const filename_unique = Date.now();
const storage = multer.diskStorage({
  destination: './upload',
  filename(req, file, cb) {
    cb(null, `${filename_unique}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage }).single('file');

/**
 * 
 * req.file.mimetype->extension
 *  
 */
export const fileUpload = (req, res) => {
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      console.log(err);
      res.status(404).send(err);
      
      // A Multer error occurred when uploading.
    } else if (err) {
      console.log(err);
      res.status(404).send(err);
      // An unknown error occurred when uploading.
    } else {
      fileload.create({
        fileId: uuid(),
        email: req.app.get('email'),
        filename: `${filename_unique}${path.extname(req.file.originalname)}`,
        filepath: './upload',
        original_name: req.file.originalname,
      });
      res.status(200).send();
    }
    // Everything went fine.
  });
};

/**
 * file download
 * @see https://gist.github.com/javilobo8/097c30a233786be52070986d8cdb1743
 * @borrows token from token middleware
 * 
 */

export const fileDownload = (req, res) => {
  const { fileid } = req.headers;
  fileload.findOne({
    where: {
      fileId: fileid,
    }
  })
    .then(dataset => {
      if (dataset) {
        res.status(200).download(
          `./upload/${dataset.filename}`, dataset.filename
        );
      } else {
        res.status(404).send('failed');
      }
    })
    .catch(_err => {
      res.status(404).send('failed');
  });
};
