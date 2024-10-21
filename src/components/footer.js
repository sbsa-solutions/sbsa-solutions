import { Link } from "react-router-dom";

export function Footer() {
  return (
    <>
      <footer className="footer section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget">
                <h4 className="text-capitalize mb-4">Quick Links</h4>

                <ul className="list-unstyled footer-menu lh-35">
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>

                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 mx-auto">
              <div className="widget">
                <div className="logo mb-4">
                  <h3>
                    SBSA<span>Solutions.</span>
                  </h3>
                </div>
                <h6>
                  <Link to="mailto:support@gmail.com">
                    sbsa.business.solutions@gmail.com
                  </Link>
                </h6>
                <Link to="tel:+23-345-67890">
                  <span className="text-color h4">+216 22 605 020</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="footer-btm pt-4">
            <div className="row">
              <div className="col-lg-6">
                <div className="copyright">
                  Copyright &copy; 2024, Developed by{" "}
                  <Link to="https://sbsa.com/">
                    SBSA<span className="text-color">Solutions.</span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 text-left text-lg-right">
                <ul className="list-inline footer-socials">
                  <li className="list-inline-item">
                    <Link to="https://www.facebook.com/sbsa">
                      <i className="fab fa-facebook-f mr-2"></i>Facebook
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="https://twitter.com/sbsa">
                      <i className="fab fa-twitter mr-2"></i>Twitter
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
