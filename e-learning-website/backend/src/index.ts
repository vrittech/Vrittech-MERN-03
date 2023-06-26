import express, { Request, Response } from 'express';
import "dotenv/config";
import { dbConnection } from './config/db.config';

const app = express();
dbConnection();

app.listen(3000, () => {
    console.log('App is running at port 3000')
})