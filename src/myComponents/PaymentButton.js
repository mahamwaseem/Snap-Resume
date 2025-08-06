// src/components/PaymentButton.js
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51RrepPRzpNjUxuCBx9LvI9DcVYrCF6MLOJvhmceaLjkf5QnEBtd3yPbBlfQEdMHtDhRWNWGGTyPz9jEPlzU1tAU800SPvnjKv1');

export default function PaymentButton() {
  const handleCheckout = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/payments/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}) // send anything needed
      });

      // If backend returned HTML or an error page, res.ok will be false.
      if (!res.ok) {
        const text = await res.text();
        console.error('Server returned non-OK response:', res.status, text);
        alert('Server error creating checkout session. Check backend logs.');
        return;
      }

      const data = await res.json();
      if (!data || !data.id) {
        console.error('Unexpected response JSON:', data);
        alert('Invalid response from server. Check console.');
        return;
      }

      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({ sessionId: data.id });
      if (error) {
        console.error('Stripe redirect error:', error);
        alert(error.message);
      }
    } catch (err) {
      console.error('Network or other error:', err);
      alert('Failed to create checkout session. See console for details.');
    }
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
