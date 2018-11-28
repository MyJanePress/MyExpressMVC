import { fileload } from '../models';
export const getPrivateData = (req, res) => {
    fileload.findAll({
        attributes: ['fileId', 'email', 'createdAt', 'updatedAt'],
    })
    .then(readData => {
        res.status(200).send(readData);
    })
    .catch(error => {
        res.status(404).send('failed');
    })
}