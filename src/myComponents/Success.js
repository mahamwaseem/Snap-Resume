import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

export default function Success() {
  const [searchParams] = useSearchParams();
  const [verified, setVerified] = useState(false);

  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const res = await axios.post('http://localhost:5000/api/verify-payment', { sessionId });
        if (res.data.success) {
          setVerified(true);
        }
      } catch (err) {
        console.error(err);
      }
    };

    if (sessionId) verifyPayment();
  }, [sessionId]);

  return (
    <div className="success-page">
      <h2>Payment Successful 🎉</h2>
      {verified ? (
        <a href="/download-resume.pdf" download className="download-link">
          Click here to download your resume
        </a>
      ) : (
        <p>Verifying payment...</p>
      )}
    </div>
  );
}
