import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import '../Components/Home.css';

const handleFacebookShare = () => {
  window.open("https://www.facebook.com/share/1HPKjWaAPs/", "_blank", "noopener,noreferrer");
};

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h1 className="testimonials-title">WHAT OUR CUSTOMER SAY</h1>

      <div className="testimonials-cards">

        <div className="testimonial-card">
          <p>
            "The pastries from Eat and Smile Bakery are simply divine! The cakes are moist, and the croissants are perfectly flaky. Highly recommend!"
          </p>
          <h3 className="testimonial-author">- Sarah Johnson</h3>
          <span className="testimonial-role">Local Food Blogger</span>
        </div>

        <div className="testimonial-card">
          <p>
            "Every time I walk into Eat and Smile Bakery, I know I'm going to leave with something amazing. Their cookies are out of this world!"
          </p>
          <h3 className="testimonial-author">- James Lee</h3>
          <span className="testimonial-role">Satisfied Customer</span>
        </div>

        <div className="testimonial-card">
          <p>
            "Best bakery in town! The bread is always fresh, and the staff is so friendly. A great experience every visit."
          </p>
          <h3 className="testimonial-author">- Emily Richards</h3>
          <span className="testimonial-role">Frequent Visitor</span>
        </div>

      </div>

      <div className="follow-section">
        <p className="follow-title">FOLLOW US</p>

        <div className="social-icons">
          <FaFacebookF
            onClick={handleFacebookShare}
            className="social-icon"
          />
          <FaInstagram
            onClick={() => window.open("https://www.instagram.com/eatandsmilebakery?igsh=Yml6OHNqdmo3aTA1")}
            className="social-icon"
          />
        </div>

        <div className="contact-info">
          <p className="contact-item">Email : abidaliqureshi6624@gmail.com</p>
          <p className="contact-item">Address : 333 OPPOSITE BURJ KHALIFA</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
