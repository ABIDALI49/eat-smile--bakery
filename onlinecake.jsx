import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
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
const storage = getStorage(app);

const Onlinecakeorders = () => {
  const navigate = useNavigate();

  const initialFormData = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    pickupDate: '',
    pickupTime: '',
    cakeSize: '',
    cakeFlavor: '',
    filling: '',
    decoration: '',
    decorationColor: '',
    cakeImage: null
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, phone, email, pickupDate, pickupTime, cakeSize, cakeFlavor, filling, decoration, decorationColor, cakeImage } = formData;

    if (!firstName || !lastName || !phone || !email || !pickupDate || !pickupTime) {
      alert('Please fill in all required fields.');
      return;
    }

    let imageUrl = '';
    if (cakeImage) {
      const storageRef = ref(storage, `cakeImages/${cakeImage.name}`);
      await uploadBytes(storageRef, cakeImage);
      imageUrl = await getDownloadURL(storageRef);
    }

    const orderData = {
      firstName,
      lastName,
      phone,
      email,
      pickupDate,
      pickupTime,
      cakeSize,
      cakeFlavor,
      filling,
      decoration,
      decorationColor,
      cakeImage: imageUrl
    };

    try {
      await addDoc(collection(db, 'cakeOrders'), orderData);
      alert('Form submitted successfully!');
      setFormData(initialFormData);

      // Optional redirect
      // navigate('/thank-you');
    } catch (error) {
      alert('Error submitting form: ' + error.message);
    }
  };

  return (
    <div className="order-container">
      <h2 className="order-title">ONLINE CAKE ORDER FORM</h2>

      <form onSubmit={handleSubmit} className="order-form">

        <h5 className="order-subtitle">Place Your Order</h5>

        <div className="form-grid">
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter first name"
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter last name"
            />
          </div>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label>Pickup Date</label>
            <input
              type="date"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Pickup Time</label>
            <input
              type="time"
              name="pickupTime"
              value={formData.pickupTime}
              onChange={handleChange}
            />
          </div>
        </div>

        <p className="order-note">
          Please remember we close at 2:00 PM Monday & Tuesday, 3:00 PM Wednesday & Thursday, 5:00 PM on Friday, and 3:00 PM on Saturday.
        </p>

        <div className="form-grid">
          <div className="form-group">
            <label>Cake Size</label>
            <select
              name="cakeSize"
              value={formData.cakeSize}
              onChange={handleChange}
            >
              <option value="">Select a size</option>
              <option value="full-sheet">Full Sheet</option>
              <option value="half-sheet">Half Sheet</option>
              <option value="10-inch">10-inch</option>
              <option value="12-inch">12-inch</option>
              <option value="14-inch">14-inch</option>
              <option value="16-inch">16-inch</option>
            </select>
          </div>
          <div className="form-group">
            <label>Cake Flavor</label>
            <select
              name="cakeFlavor"
              value={formData.cakeFlavor}
              onChange={handleChange}
            >
              <option value="">Select a flavor</option>
              <option value="combination">Combination</option>
              <option value="white">White</option>
              <option value="chocolate">Chocolate</option>
              <option value="marble">Marble</option>
              <option value="lemon">Lemon</option>
              <option value="carrot">Carrot</option>
            </select>
          </div>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label>Filling</label>
            <select
              name="filling"
              value={formData.filling}
              onChange={handleChange}
            >
              <option value="">Select filling</option>
              <option value="cream">Cream</option>
              <option value="jam">Jam</option>
              <option value="chocolateGanache">Chocolate Ganache</option>
              <option value="fruit">Fruit</option>
              <option value="buttercream">Buttercream</option>
            </select>
          </div>
          <div className="form-group">
            <label>Decoration</label>
            <select
              name="decoration"
              value={formData.decoration}
              onChange={handleChange}
            >
              <option value="">Select decoration</option>
              <option value="sprinkles">Sprinkles</option>
              <option value="fondant">Fondant</option>
              <option value="freshFlowers">Fresh Flowers</option>
              <option value="customText">Custom Text</option>
              <option value="edibleImages">Edible Images</option>
            </select>
          </div>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label>Decoration Color</label>
            <input
              type="text"
              name="decorationColor"
              value={formData.decorationColor}
              onChange={handleChange}
              placeholder="Enter color"
            />
          </div>
          <div className="form-group">
            <label>Upload Image</label>
            <input
              type="file"
              name="cakeImage"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-submit">
          <button type="submit">Submit</button>
        </div>

      </form>
    </div>
  );
};

export default Onlinecakeorders;
