import React, { useState } from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import '../Components/Home.css';

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYwMieOmRFwV-IorwnoKs1cAOy7-VBbiY",
  authDomain: "bakery-store-58ef0.firebaseapp.com",
  projectId: "bakery-store-58ef0",
  storageBucket: "bakery-store-58ef0.appspot.com",
  messagingSenderId: "380685840700",
  appId: "1:380685840700:web:c6a54a2d7b9a653676ee39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const handleFacebookShare = () => {
  window.open("https://www.facebook.com/share/1HPKjWaAPs/", "_blank", "noopener,noreferrer");
};

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({
      ...contactData,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    const { name, email, message } = contactData;

    if (!name || !email || !message) {
      alert('Please fill all fields');
      return;
    }

    try {
      await addDoc(collection(db, 'contactMessages'), {
        name,
        email,
        message,
        timestamp: new Date()
      });
      alert('Message sent successfully!');
      setContactData({ name: '', email: '', message: '' });
    } catch (error) {
      alert('Error sending message: ' + error.message);
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">CONTACT US</h1>

      <p className="contact-description">
        If you have any questions, inquiries, or special requests, feel free to reach out! We'd love to hear from you.
      </p>

      <div className="contact-form">
        <p className="contact-label">Your Name</p>
        <input
          className="contact-input"
          type="text"
          placeholder="Enter Your Name"
          name="name"
          value={contactData.name}
          onChange={handleChange}
        />

        <p className="contact-label">Your Email</p>
        <input
          className="contact-input"
          type="email"
          placeholder="Enter Your Email"
          name="email"
          value={contactData.email}
          onChange={handleChange}
        />

        <p className="contact-label">Your Message</p>
        <textarea
          className="contact-textarea"
          placeholder="Write your message here"
          name="message"
          value={contactData.message}
          onChange={handleChange}
        />

        <button className="contact-button" onClick={handleSubmit}>
          Send Message
        </button>
      </div>

      <div className="contact-footer">
        <p className="footer-title">VISIT US AT</p>
        <p className="footer-subtitle">FOLLOW US</p>

        <div className="footer-icons">
          <FaFacebookF
            className="footer-icon"
            onClick={handleFacebookShare}
          />
          <FaInstagram
            className="footer-icon"
            onClick={() => window.open("https://www.instagram.com/eatandsmilebakery?igsh=Yml6OHNqdmo3aTA1")}
          />
        </div>

        <p className="footer-contact">Phone: +923332076402</p>
        <p className="footer-contact">Email: abidaliqureshi6624@gmail.com</p>
        <p className="footer-contact">Address: 333 OPPOSITE BURJ KHALIFA</p>
      </div>
    </div>
  );
};

export default Contact;
