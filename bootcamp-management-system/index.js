import express from 'express';
import 'dotenv/config';
import indexRouter from './routes/index.js'
import config from './config/config.js';
import { dbConnection } from './config/db.config.js';

const app = express();
dbConnection();

app.use('/api/v1', indexRouter);

//Error Handling for unmatched routes
app.use((req, res, next) => {
   const error = new Error("Page not found");
   error.status = 404;
   next(error);
})

//Error handler middleware
app.use((error, req, res, next) => {
   res.status(error.status || 500).json({
      status: false,
      error: error.message
   })
})

app.listen(config.PORT, () => {
   console.log(`Server running in ${config.NODE_ENV} environment at PORT ${config.PORT}`)
})