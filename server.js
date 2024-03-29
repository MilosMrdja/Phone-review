require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected'));

app.use(cors());
app.use(express.json());
app.use('/phones', require('./routes/phones'));

app.listen(3000, () => console.log('TRUE'));