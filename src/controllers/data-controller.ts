import express from 'express';

const dataController = express.Router();

dataController.get('/', (request, response) => {
  response.send('Get your data here');
});

dataController.get('/stuff', (request, response) => {
  response.send('Stuff??? What sfuff???');
})

export default dataController;
