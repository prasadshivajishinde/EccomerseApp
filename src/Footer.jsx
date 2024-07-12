
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>About Us</h5>
              <hr style={{ width: '100px' }} className='mt-0' />
              <p>
                Welcome to MobileMart, your one-stop shop for the latest and greatest mobile phones. We are dedicated to providing our customers with a wide selection of mobile devices at competitive prices.
              </p>
            </div>
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <hr style={{ width: '100px' }} className='mt-0' />
              <ul className="list-unstyled">
                <li><a href="#" className="text-white">Home</a></li>
                <li><a href="#" className="text-white">About</a></li>
                <li><a href="#" className="text-white">Services</a></li>
                <li><a href="#" className="text-white">Contact</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Contact Us</h5>
              <hr style={{ width: '100px' }} className='mt-0' />
              <address>
                <strong>MobileMart Headquarters</strong><br />
                1234 Mobile Avenue, Suite 101<br />
                Pune City, State 5678<br />
              </address>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12 text-center">
              <p className="mb-0" style={{ fontSize: '12px' }}>&copy; {new Date().getFullYear()} MobileMart | Made by Prasad Shinde.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
