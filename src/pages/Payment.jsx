/* Original Simple
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

const Payment = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;

 const handlePaymentConfirm = async () => {
  try {
    await setDoc(doc(db, 'users', user.uid), {
      hasPaid: false,
      paymentRequested: true,
      email: user.email,
    });

    alert(
      'Payment confirmation submitted.\n\n📩 Please email your payment receipt to: shaikkhaleelbasha005@gmail.com\n\nAdmin will verify and approve access soon.'
    );

    navigate('/');
  } catch (error) {
    alert('Error submitting payment request: ' + error.message);
  }
};



  useEffect(() => {
    if (!user) navigate('/');
  }, [user, navigate]);

  return (
    <div className="payment-page" style={{ textAlign: 'center', padding: '40px',color:"black" }}>
      <h2>Complete ₹5 Payment to Continue</h2>
      <img
        src="/assets/qr.png"
        alt="Scan QR to Pay"
        style={{ width: '300px', marginTop: '20px', borderRadius: '10px' }}
      />
<p style={{ marginTop: '20px', fontSize: '14px' }}>
  📩 After submitting, please email your payment receipt to: <br />
  <strong>shaikkhaleelbasha005@gmail.com</strong>
</p>
      <button
        onClick={handlePaymentConfirm}
        style={{
          padding: '10px 20px',
          backgroundColor: '#ffffff',
          color: '#000',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          marginTop: '10px'
        }}
      >
        I have paid ₹5
      </button>
    </div>
  );
};

export default Payment;*/

/* File Upload
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const Payment = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handlePaymentConfirm = async () => {
    if (!file) {
      alert("Please upload your payment receipt before submitting.");
      return;
    }

    setUploading(true);
    try {
      const storageRef = ref(storage, `receipts/${user.uid}`);
      await uploadBytes(storageRef, file);
      const receiptURL = await getDownloadURL(storageRef);

      await setDoc(doc(db, 'users', user.uid), {
        hasPaid: false,
        paymentRequested: true,
        email: user.email,
        receiptURL: receiptURL,
      });

      alert('Receipt uploaded. Admin will verify and grant access soon.');
      navigate('/');
    } catch (error) {
      alert('Error uploading receipt: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  useEffect(() => {
    if (!user) navigate('/');
  }, [user, navigate]);

  return (
  <div className="payment-page" style={{ textAlign: 'center', padding: '40px' }}>
    <h2 style={{ color: 'black' }}>Complete ₹5 Payment to Continue</h2>
    <img
      src="/assets/qr.png"
      alt="Scan QR to Pay"
      style={{ width: '300px', marginTop: '20px', borderRadius: '10px' }}
    />
    <p style={{ marginTop: '20px', color: 'black' }}>After payment, upload your receipt:</p>

    <input
      type="file"
      accept="image/*"
      onChange={(e) => setFile(e.target.files[0])}
      style={{ margin: '15px auto', display: 'block' }}
    />

    <button
      onClick={handlePaymentConfirm}
      disabled={uploading}
      style={{
        padding: '10px 20px',
        backgroundColor: '#000',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        marginTop: '10px'
      }}
    >
      {uploading ? "Uploading..." : "I have paid ₹5"}
    </button>

    <p style={{ marginTop: '25px', color: 'black', fontSize: '15px' }}>
      Having trouble uploading? <br />
      📧 Send your payment receipt manually to: <br />
      <strong>audyn.admin@gmail.com</strong>
    </p>
  </div>
);

};

export default Payment;*/

//Note Alert
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

const Payment = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;

  const ADMIN_EMAIL = 'shaikkhaleelbasha005@gmail.com'; // 🔁 Your admin email

  const handlePaymentConfirm = async () => {
    try {
      await setDoc(doc(db, 'users', user.uid), {
        hasPaid: false,
        paymentRequested: true,
        email: user.email,
      });

      alert(
        `✅ Payment request submitted.\n\n📩 Please email your payment receipt to: ${ADMIN_EMAIL}\n\nNote: You’ll be given access only if the receipt is correct (₹10, UPI Ref ID, date/time).`
      );

      navigate('/');
    } catch (error) {
      alert('❌ Error: ' + error.message);
    }
  };

  useEffect(() => {
    if (!user) navigate('/');
  }, [user, navigate]);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1f1c2c, #928dab)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '30px',
        color: 'white',
      }}
    >
      <div
        style={{
          background: '#ffffff10',
          backdropFilter: 'blur(14px)',
          padding: '30px 40px',
          borderRadius: '16px',
          maxWidth: '520px',
          width: '100%',
          boxShadow: '0 0 14px rgba(0,0,0,0.3)',
        }}
      >
        <h2 style={{ fontSize: '1.8rem', marginBottom: '10px', color: '#fff' }}>
          One Step Away 🚀
        </h2>
        <p style={{ marginBottom: '18px', color: '#f0f0f0', fontSize: '15px' }}>
          You're just one step away from <strong>unlimited song listening & downloads 🎧</strong>
        </p>

        <img
          src="/assets/qr-code10.png"
          alt="Scan QR to Pay"
          style={{
            width: '100%',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            marginBottom: '18px',
          }}
        />

        <p style={{ fontSize: '15px' }}>
          Scan the QR and pay <strong>₹10</strong> to continue.
        </p>

        <button
          onClick={handlePaymentConfirm}
          style={{
            marginTop: '16px',
            padding: '10px 18px',
            fontSize: '15px',
            fontWeight: 'bold',
            borderRadius: '8px',
            backgroundColor: '#00ffcc',
            color: '#000',
            border: 'none',
            cursor: 'pointer',
            width: '100%',
            transition: 'all 0.2s',
          }}
        >
          ✅ I have paid ₹10
        </button>

        <p style={{ marginTop: '20px', fontSize: '14px', color: '#eee' }}>
          📩 Send your payment receipt to:{' '}
          <a
            href={`mailto:${ADMIN_EMAIL}`}
            style={{ color: '#00ffcc', fontWeight: 'bold', textDecoration: 'none' }}
          >
            {ADMIN_EMAIL}
          </a>
        </p>

        <div
          style={{
            marginTop: '20px',
            padding: '12px 14px',
            borderRadius: '8px',
            backgroundColor: '#fff8e180',
            color: '#222',
            fontSize: '14px',
            lineHeight: '1.5',
          }}
        >
          <strong>Note:</strong> You will be given access only if you{' '}
          <strong>send the receipt correctly</strong>. Your screenshot must clearly show:
          <ul style={{ paddingLeft: '20px', marginTop: '6px' }}>
            <li>✅ Amount: ₹10</li>
            <li>✅ UPI Reference / Transaction ID</li>
            <li>✅ Date &amp; Time of payment</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Payment;


//Automatic email
/*
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

const Payment = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;

  const handlePaymentConfirm = async () => {
    try {
      await setDoc(doc(db, 'users', user.uid), {
        hasPaid: false,
        paymentRequested: true,
        email: user.email,
      });

      alert(
        '📩 Please email your payment receipt to: your-email@gmail.com\n\nNOTE: You will be given access only if you send the correct receipt.'
      );

      navigate('/');
    } catch (error) {
      alert('Error submitting payment request: ' + error.message);
    }
  };

  useEffect(() => {
    if (!user) navigate('/');
  }, [user, navigate]);

  return (
    <div className="payment-page" style={{ textAlign: 'center', padding: '40px', color: 'black' }}>
      <h2>Complete ₹5 Payment to Continue</h2>

      <img
        src="/assets/qr.png"
        alt="Scan QR to Pay"
        style={{ width: '300px', marginTop: '20px', borderRadius: '10px' }}
      />

      <p style={{ marginTop: '20px' }}>After payment, click the button below:</p>

      <button
        onClick={handlePaymentConfirm}
        style={{
          padding: '10px 20px',
          backgroundColor: '#ffffff',
          color: '#000',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          marginTop: '10px'
        }}
      >
        I have paid ₹5
      </button>

   
      <p
        style={{
          marginTop: '15px',
          fontSize: '14px',
          color: 'red',
          fontWeight: 'bold',
        }}
      >
        NOTE: You will be given access only if you send the correct payment receipt to <br />
        <span style={{ color: '#000' }}>your-email@gmail.com</span>
      </p>

    
      <a
        href={`mailto:your-email@gmail.com?subject=Payment Receipt for ₹5&body=Hi,%0A%0AI have completed the ₹5 payment.%0APlease find the attached receipt.%0A%0ARegards,%0A${user?.email}`}
        style={{
          display: 'inline-block',
          marginTop: '20px',
          textDecoration: 'none',
          color: 'white',
          backgroundColor: '#1a73e8',
          padding: '10px 18px',
          borderRadius: '6px',
          fontWeight: 'bold'
        }}
      >
        📤 Send Receipt via Email
      </a>
    </div>
  );
};

export default Payment;*/

