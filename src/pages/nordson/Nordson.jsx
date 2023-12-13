import { IoIosSearch } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import './nordson.css';
import './index.css';
import nordsonLogo from './images/nordsonLogo.png';

function Nordson() {
  return (
    <div>
      <div className="top-blue-bar">
        <div
          style={{
            position: 'absolute',
            left: ' calc(50% - 75px)',
            paddingTop: '25px',
            paddingBottom: '20px',
            paddingLeft: '20px',
            paddingRight: '20px',
            backgroundColor: 'white',
            borderBottomRightRadius: '20px',
            borderBottomLeftRadius: '20px',
            boxShadow: '0 10px 10px 0 rgba(0,0,0,.2)'
          }}
        >
          <img src={nordsonLogo} height="40px" />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px'
        }}
      >
        <IoIosSearch
          id="ioIosSearch"
          style={{ fontSize: '2rem', color: 'rgb(11,112,189)' }}
        />

        <RxHamburgerMenu
          id="rxHamburgerMenu"
          style={{ fontSize: '2rem', color: 'rgb(11,112,189)' }}
        />
      </div>
      <main>
        <div className="top-main">
          <p>
            Can't find what you're looking for? Let us help you find a product.
          </p>
          <button id="getStartedBtn">Get Started</button>
        </div>
        <div className="bottom-main">
          <div>
            <h2>We Deliver Innovative Precision Technology.</h2>
            <p>Find the right product or solution for your business.</p>
            <button id="exploreProductsBtn">Explore Products</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Nordson;
