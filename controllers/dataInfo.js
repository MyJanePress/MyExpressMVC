import { fileload } from '../models';

const getPrivateData = (req, res) => {
  fileload.findAll({
    attributes: ['fileId', 'email', 'filename',  'createdAt', 'updatedAt'],
  })
    .then((readData) => {
      res.status(200).send(readData);
    })
    .catch(() => {
      res.status(404).send('failed');
    });
};

export default getPrivateData;
