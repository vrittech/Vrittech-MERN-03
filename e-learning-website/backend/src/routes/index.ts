import express, { Request, Response } from 'express';
import passport from 'passport';

const router = express.Router();

router.get('/auth/google', passport.authenticate('google'));

router.get('/login/failed', (req: Request, res: Response) => {
    res.status(401).json({
        message: 'Unauthorized user'
    })
})

router.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: '/login/failed'
}))

export default router;