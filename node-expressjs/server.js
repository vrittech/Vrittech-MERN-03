import express from 'express';
import 'dotenv/config';
import indexRouter from './routes/index.js'

// same step as above
// import dotenv from 'dotenv';
// dotenv.config();

const app = express();

app.set('view engine', 'ejs');

//templating engine - ejs/handlebars/pug

app.use('/api/v1', indexRouter);


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
   console.log('Server is running at ', PORT);
})