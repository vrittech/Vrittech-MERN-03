import Stripe from 'stripe';
import express, { Request, Response } from 'express';

const STRIPE_KEY = process.env.STRIPE_API_KEY || '';

const stripe = new Stripe(STRIPE_KEY, {
    apiVersion: '2022-11-15'
})
const URL = process.env.FRONTEND_URL;
const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Frontend web development'
                    },
                    unit_amount: 2000
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `${URL}/cart/success`,
        cancel_url: `${URL}/cart`,
    });
    res.send({
        data: session.id
    })


});

export default router;