import Stripe from 'stripe';
import express, { Request, Response } from 'express';

const STRIPE_KEY = process.env.STRIPE_API_KEY || '';

const stripe = new Stripe(STRIPE_KEY, {
    apiVersion: '2022-11-15'
})
const URL = process.env.FRONTEND_URL;
const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {

    const line_items = req.body.cartItems.map((item: any) => {
        return {
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.title,
                    description: item.description,
                    metadata: {
                        id: item._id
                    }
                },
                unit_amount: item.price * 100,

            },
            quantity: item.cartQuantity
        }
    })

    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        success_url: `${URL}/success`,
        cancel_url: `${URL}/cart`,
    });
    if (session) {
        res.status(200).json({
            success: true,
            data: session.url
        })
    }


});

export default router;