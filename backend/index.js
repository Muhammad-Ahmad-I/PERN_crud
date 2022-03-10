const express = require('express');

const bodyparser = require('body-parser');
const dotenv = require('dotenv');
const db = require('./config/database.js');
const gigRoute = require('./routes/GigRoutes.js');
const cors = require('cors');
dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
app.use(cors());
db.authenticate()
  .then(() => {
    console.log('database is connected');
  })
  .catch((err) => {
    console.log(`error: ${err}`);
  });
app.use(express.json());
bodyparser.urlencoded({ extended: true });
app.use('/gigs', gigRoute);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
