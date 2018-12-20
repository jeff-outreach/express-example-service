import express from 'express';

const userController = express.Router();

userController.get('/', (request, response) => {
  response.send('Find out who you really are here');
});

userController.get('/me', (request, response) => {
  response.send('You are special');
})

export default userController;
