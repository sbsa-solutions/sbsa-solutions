export function Contact() {
  return (
    <>
      <section className="page-title bg-1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <span className="text-white">Contact Us</span>
                <h1 className="text-capitalize mb-4 text-lg">Get in Touch</h1>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="index.html" className="text-white">
                      Home
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <span className="text-white">/</span>
                  </li>
                  <li className="list-inline-item text-white-50">Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-wrap section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <form
                id="contact-form"
                className="contact__form"
                method="post"
                action="index.html"
              >
                <h3 className="text-md mb-4">Contact Form</h3>
                <div className="form-group">
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="form-group-2 mb-4">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="4"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button className="btn btn-main" name="submit" type="submit">
                  Send Message
                </button>
              </form>
            </div>

            <div className="col-lg-5 col-sm-12">
              <div className="contact-content pl-lg-5 mt-5 mt-lg-0">
                <span className="text-muted">We are Professionals</span>
                <h2 className="mb-5 mt-2">
                  Don’t Hesitate to contact with us for any kind of information
                </h2>

                <ul className="address-block list-unstyled">
                  <li>
                    <i className="ti-direction mr-3"></i>Tunis, Tunisia
                  </li>
                  <li>
                    <i className="ti-email mr-3"></i>Email:
                    sbsa.business.solutions@gmail.com
                  </li>
                  <li>
                    <i className="ti-mobile mr-3"></i>Phone:+216 22 605 020
                  </li>
                </ul>

                <ul className="social-icons list-inline mt-5">
                  <li className="list-inline-item">
                    <a href="http://www.sbsa.com">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="http://www.sbsa.com">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="http://www.sbsa.com">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="google-map">
        <div
          id="map"
          data-latitude="40.712776"
          data-longitude="-74.005974"
          data-marker="images/marker.png"
          data-marker-name="Megakit"
        ></div>
      </div>
    </>
  );
}
