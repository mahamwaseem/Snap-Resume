// PaymentButton.js
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const stripePromise = loadStripe('pk_test_51RrepPRzpNjUxuCBx9LvI9DcVYrCF6MLOJvhmceaLjkf5QnEBtd3yPbBlfQEdMHtDhRWNWGGTyPz9jEPlzU1tAU800SPvnjKv1'); 

export default function PaymentButton() {
  const handleCheckout = async () => {
    const stripe = await stripePromise;
    
    const response = await axios.post('http://localhost:5000/api/create-checkout-session');


    const result = await stripe.redirectToCheckout({
      sessionId: response.data.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  return <button
          onClick={handleCheckout}
          style={{ backgroundColor: '#f75b42', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', fontWeight: 'bold' }}
        >
          Payment
        </button>
}
