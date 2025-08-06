// Backend/routes/payments.js
const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
require('dotenv').config();

// If you prefer, use env var here instead of hardcoded key:
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const stripe = new Stripe('sk_test_51RrepPRzpNjUxuCBgiwf7NOb9jdcbNiaEnXVPVElM7gFPkJQ0Yvl7A0XvWkJoElsNPLVBColqGbSxel6Vr71XJO400Cak4OzUX');

console.log('Payments route loaded. Stripe key present?', !!process.env.STRIPE_SECRET_KEY);

router.post('/create-checkout-session', async (req, res) => {
  console.log('POST /api/payments/create-checkout-session called. body:', req.body);

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Resume Builder Pro Plan',
            },
            // smallest unit: for USD $5.00 => 500 (cents)
            unit_amount: 500,
          },
          quantity: 1,
        },
      ],
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
    });

    console.log('Created session id:', session.id);
    res.json({ id: session.id });

  } catch (err) {
    console.error('Stripe error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
