import React from 'react';

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    console.log('Subscribed with:', email);
    alert('Subscribed successfully!'); // Temporary feedback
    e.target.reset();
  };

  return (
    <footer className="bg-light py-5">
      <div className="container">
        <div className="row gy-4">
          {/* Store Info Section */}
          <div className="col-lg-3 col-md-6">
            <h2 className="fw-bold text-primary mb-3">MyStore</h2>
            <p className="text-secondary">
              Discover premium products crafted for you.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-semibold text-dark mb-3">Explore</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-dark text-decoration-none hover-text-primary">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/products" className="text-dark text-decoration-none hover-text-primary">
                  Products
                </a>
              </li>
              <li className="mb-2">
                <a href="/about" className="text-dark text-decoration-none hover-text-primary">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="text-dark text-decoration-none hover-text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-semibold text-dark mb-3">Get in Touch</h5>
            <ul className="list-unstyled text-secondary">
              <li className="mb-2">
                <i className="bi bi-envelope-fill me-2 text-primary"></i>
                info@mystore.com
              </li>
              <li className="mb-2">
                <i className="bi bi-telephone-fill me-2 text-primary"></i>
                123-456-7890
              </li>
              <li>
                <i className="bi bi-geo-alt-fill me-2 text-primary"></i>
                123 Shopping St, City
              </li>
            </ul>
          </div>

          {/* Subscription Section */}
          <div className="col-lg-3 col-md-6">
            <div className="bg-primary text-white p-4 rounded-3">
              <h5 className="fw-semibold mb-3">Stay Updated</h5>
              <p className="small mb-3">Subscribe for exclusive deals!</p>
              <form onSubmit={handleSubscribe}>
                <div className="input-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    aria-label="Email"
                    required
                  />
                  <button className="btn btn-light text-primary fw-semibold" type="submit">
                    Join
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="row mt-5 justify-content-center">
          <div className="col-auto">
            <a href="https://facebook.com" className="text-primary mx-3 fs-3">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://twitter.com" className="text-primary mx-3 fs-3">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://instagram.com" className="text-primary mx-3 fs-3">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://linkedin.com" className="text-primary mx-3 fs-3">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-4 pt-4 border-top border-secondary-subtle">
          <p className="text-secondary mb-0 small">
            © {new Date().getFullYear()} MyStore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;