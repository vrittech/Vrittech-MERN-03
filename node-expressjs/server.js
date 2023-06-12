import express from 'express';
import 'dotenv/config';
import indexRouter from './routes/index.js'
import { dbConnection } from './config/db.config.js';
import authMiddleware from './middleware/auth.middleware.js';

//authentication-> user login -> user & principle
// authorization-> role user -> correct resource -> access -> JWT


// same step as above
// import dotenv from 'dotenv';
// dotenv.config();

//middleware

const log = (req, res, next) => {
   console.log(req.method);
   next();
}

dbConnection()

const app = express();

app.set('view engine', 'ejs');
//parse json and url encoded form data
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//templating engine - ejs/handlebars/pug

app.use('/api/v1', log, indexRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
   console.log('Server is running at ', PORT);
})