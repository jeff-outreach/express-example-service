import express from 'express';

import dataController from './controllers/data-controller';
import userController from './controllers/user-controller';

var app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);

// Top level routes
app.use('/api/data', dataController);
app.use('/api/users', userController);

app.get('/', function(req, res) {
  res.send('What do you want to do?')
});

export default app;
