import { useNavigate } from 'react-router-dom';
import { IoFish } from 'react-icons/io5';
import { FaStar, FaFacebookF, FaInstagram } from 'react-icons/fa6';
import { GiStairsCake } from 'react-icons/gi';
import picture from '../assets/images/width_700.jpg';
import picture1 from '../assets/images/special cakes.png';
import special from '../assets/images/special.jpg';
import another from '../assets/images/another.jpg';
import bakery from '../assets/images/cakeimage4.png';
import bakery1 from '../assets/images/cakeimage1.jpg';
import bakery2 from '../assets/images/cakeimage2.jpeg';
import bakery3 from '../assets/images/cakeimage3.webp';
import bakery4 from '../assets/images/images.jpeg';
import bakery5 from '../assets/images/pastries3.jpg';
import bakery6 from '../assets/images/images (1).jpeg';
import '../Components/Home.css';

const handleFacebookShare = () => {
  window.open(
    'https://www.facebook.com/share/1HPKjWaAPs/',
    '_blank',
    'noopener,noreferrer'
  );
};

const Home = () => {
  const nav = useNavigate();

  return (
    <div>
      <img src={picture} className="middleimage" alt="Bakery" />

      <h1>WELCOME TO EAT & SMILE BAKERY</h1>

      <p className="littleheading">
        We would like to thank you for your support as we embark on this exciting new journey with Eat and Smile Bakery. While this is a new chapter, our dedication to serving the community remains unwavering. Eat and Smile Bakery is committed to bringing you the same quality and care you’ve come to expect, with the flexibility to cater to your personal needs. If you don’t see what you’re looking for, give us a call, and we’ll do our best to make it happen. With your support, we look forward to creating a legacy that lasts for generations.
      </p>

      <div className="buttondiv">
        <button onClick={() => nav('/Online')} className="onlinebutton">
          Online Cake Order
        </button>
        <br />
        <button onClick={handleFacebookShare} className="facebookbutton">
          FACEBOOK
        </button>
        <button
          onClick={() =>
            window.open(
              'https://www.instagram.com/eatandsmilebakery?igsh=Yml6OHNqdmo3aTA1'
            )
          }
          className="instabutton"
        >
          INSTAGRAM
        </button>
      </div>

      <div id="imagesid">
        <img src={special} className="image1" alt="Special Cake" />
        <img src={picture1} className="image1" alt="Bakery" />
        <img src={another} className="image1" alt="Another Cake" />
      </div>

      <h2>A few Things we're great at</h2>

      <div id="boxes">
        <div className="fishbox">
          <IoFish className="fishicon" />
          <p className="pfishbox">FISH FRIDAY</p>
          <p className="pfishbox2">
            Deep Fried White Fish and Shrimp are available from about 8:30 AM every Friday until it’s gone. You can make sure to get yours by calling ahead and placing your order. Call the day before or early Friday and tell us what time you would like to pick up your order.
          </p>
        </div>

        <div className="specialbox">
          <FaStar className="fishicon" />
          <p className="pfishbox">SPECIAL ITEMS</p>
          <p className="pfishbox2">
            We are famous for our Kringles! Oliver’s Bakery Kringles are a unique, any time gift. Their tender, flaky crust and flavorful fillings make them ideal for Anniversaries, Weddings, Office Gatherings, Holidays, and more!
          </p>
        </div>
      </div>

      <div className="cakebox">
        <GiStairsCake className="fishicon" />
        <p className="pfishbox">CAKES</p>
        <p className="pfishbox2">
          From basic to custom, Oliver’s can help you with your next cake order. Order online or give us a call—we would love to help in any way we can.
        </p>
      </div>

      <h3>Just a little of What we Do</h3>

      <div id="bottomimages">
        <img src={bakery} className="bottomimage1" alt="Bakery Item" />
        <img src={bakery1} className="bottomimage1" alt="Bakery Item" />
        <img src={bakery2} className="bottomimage1" alt="Bakery Item" />
        <img src={bakery3} className="bottomimage1" alt="Bakery Item" />
      </div>

      <div id="secondbottomimages">
        <img src={bakery4} alt="Bakery Item" className="secondbottomimages1" />
        <img src={bakery5} alt="Bakery Item" className="secondbottomimages1" />
        <img src={another} alt="Bakery Item" className="secondbottomimages1" />
        <img src={bakery6} alt="Bakery Item" className="secondbottomimages1" />
      </div>

      <div id="lastbox">
        <p className="plastbox">FOLLOW US</p>
        <FaFacebookF onClick={handleFacebookShare} className="facebookiconlast" />
        <FaInstagram
          onClick={() =>
            window.open(
              'https://www.instagram.com/eatandsmilebakery?igsh=Yml6OHNqdmo3aTA1'
            )
          }
          className="instalastbox"
        />
        <br />
        <br />
        <p className="lastest">Email : abidaliqureshi6624@gmail.com</p>
        <p className="lastest">Address : 333 OPPOSITE BURJ KHALIFA</p>
      </div>
    </div>
  );
};

export default Home;
