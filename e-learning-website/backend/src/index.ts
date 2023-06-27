import express from 'express';
import "dotenv/config";
import { dbConnection } from './config/db.config';
import indexRouter from './routes/index';
import passport from 'passport';
import expressSession from 'express-session';
import passportMiddleware from './middlewares/passport.middleware'

const app = express();
dbConnection();


app.use(expressSession({
    secret: 'test123#',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(indexRouter);

app.listen(3000, () => {
    console.log('App is running at port 3000')
})