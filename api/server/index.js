const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectToDatabase } = require('./database.js');

const {userRoutes} = require('./routes/userRoutes.js');

dotenv.config();
connectToDatabase();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:5173',
  })
);

const port = process.env.PORT || 3001;

app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server listening on Port ${port}.`);
});
