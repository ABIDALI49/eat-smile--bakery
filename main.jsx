import { Link } from "react-router-dom";
import Logo from '../assets/images/width_800.png';
import '../Components/Home.css'
const Main = () => {
  return (
    <div id="mainnavbar">
      
      {/* Logo on Left */}
      <img src={Logo} alt="Bakery Logo" id="mainimage" />

      {/* Navigation Links */}
      <div id="mainnavbars">
        <Link to="/" className="mainnav">Home</Link>
        <Link to="/Hours" className="mainnav">Hours & Location</Link>
        <Link to="/Online" className="mainnav">Online Cake Order</Link>
        <Link to="/Testimonials" className="mainnav">Testimonials</Link>
        <Link to="/contact" className="mainnav" >Contact Us</Link>
      </div>
    </div>
  );
};

export default Main;
