import React from 'react';
import bakeryVideo from '../assets/videos/cake1.mp4';
import picture from '../assets/images/width_700.jpg';
import map from '../assets/images/map.png';
import '../Components/Home.css';

const Hours = () => {
  return (
    <>
      {/* Video Section */}
      <div id="firstvideo">
        <video autoPlay muted loop className="firstvideo1">
          <source src={bakeryVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Heading */}
      <h1 className="h1hours">HOURS AND LOCATION</h1>

      {/* Hours */}
      <div className="hoursweak">
        <p>9:00AM - 10:00PM — MONDAY</p>
        <p>9:00AM - 10:00PM — TUESDAY</p>
        <p className="hourweak1">9:00AM - 10:00PM — WEDNESDAY</p>
        <p>9:00AM - 10:00PM — THURSDAY</p>
        <p>9:00AM - 08:00PM — FRIDAY</p>
        <p>9:00AM - 09:00PM — SATURDAY</p>
        <p>9:00AM - 10:00PM — SUNDAY</p>
      </div>

      {/* Contact Info */}
      <h4>Phone : +92 333 2076402</h4>
      <p className="paddress">Address : 333 OPPOSITE BURJ KHALIFA</p>

      {/* Map */}
      <img src={map} className="lasthourimage" alt="Location Map" />
    </>
  );
};

export default Hours;
