import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const stripePromise = loadStripe('pk_test_51RrepPRzpNjUxuCBx9LvI9DcVYrCF6MLOJvhmceaLjkf5QnEBtd3yPbBlfQEdMHtDhRWNWGGTyPz9jEPlzU1tAU800SPvnjKv1'); 

export default function PaymentButton() {
  const handleCheckout = async () => {
    const res = await fetch("http://localhost:5000/api/payments/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const session = await res.json();
    const stripe = await stripePromise;
    await stripe.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <button
      onClick={handleCheckout}
      style={{
        backgroundColor: '#f75b42',
        color: 'white',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '4px',
        fontWeight: 'bold'
      }}
    >
      Payment
    </button>
  );
}
