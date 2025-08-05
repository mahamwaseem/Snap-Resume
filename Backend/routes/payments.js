// routes/payments.js
const express = require('express');
const Stripe = require('stripe');
const router = express.Router();
const Payment = require('../models/Payment');


const stripe = Stripe('ssk_test_51RrepPRzpNjUxuCBgiwf7NOb9jdcbNiaEnXVPVElM7gFPkJQ0Yvl7A0XvWkJoElsNPLVBColqGbSxel6Vr71XJO400Cak4OzUX'); //  secret key

router.post('/api/create-checkout-session', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Resume Download',
          },
          unit_amount: 500, // $5.00
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
    });

    res.json({ id: session.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



router.post('/verify-payment', async (req, res) => {
  const { sessionId } = req.body;

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === 'paid') {
      return res.json({ success: true });
    }

    res.json({ success: false });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
