import express from 'express';
import 'dotenv/config';
import indexRouter from './routes/index.js'
import { dbConnection } from './config/db.config.js';

//authentication-> user login -> user & principle
// authorization-> role user -> correct resource -> access -> JWT


// same step as above
// import dotenv from 'dotenv';
// dotenv.config();

dbConnection()

const app = express();

app.set('view engine', 'ejs');
//parse json and url encoded form data
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//templating engine - ejs/handlebars/pug

app.use('/api/v1', indexRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
   console.log('Server is running at ', PORT);
})