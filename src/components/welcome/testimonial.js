import { Link } from "react-router-dom";

export function TestimonialSection() {
  return (
    <>
      <section className="section latest-blog bg-2">
        <div className="cta-block-2 bg-gray p-5 rounded border-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 ">
                <div className="section-title">
                  <span className="h6 text-color">Clients testimonial</span>
                  <h2 className="mt-3 content-title text-white">
                    Check what's our clients say about us
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row testimonial-wrap">
              <div className="testimonial-item position-relative">
                <i className="ti-quote-left text-color"></i>

                <div className="testimonial-item-content">
                  <p className="testimonial-text text-white">
                    Quam maiores perspiciatis temporibus odio reiciendis error
                    alias debitis atque consequuntur natus iusto recusandae
                    numquam corrupti facilis blanditiis.
                  </p>

                  <div className="testimonial-author">
                    <h5 className="mb-0 text-capitalize text-color">
                      Thomas Johnson
                    </h5>
                    <p className="text-color ">
                      Excutive Director,SBSA Solutions
                    </p>
                  </div>
                </div>
              </div>
              <div className="testimonial-item position-relative">
                <i className="ti-quote-left text-color"></i>

                <div className="testimonial-item-content">
                  <p className="testimonial-text text-white">
                    Consectetur adipisicing elit. Quam maiores perspiciatis
                    temporibus odio reiciendis error alias debitis atque
                    consequuntur natus iusto recusandae .
                  </p>

                  <div className="testimonial-author">
                    <h5 className="mb-0 text-capitalize text-color ">
                      Mickel hussy
                    </h5>
                    <p className="text-color ">
                      Excutive Director,SBSA Solutions
                    </p>
                  </div>
                </div>
              </div>
              <div className="testimonial-item position-relative">
                <i className="ti-quote-left text-color "></i>

                <div className="testimonial-item-content">
                  <p className="testimonial-text text-white">
                    Quam maiores perspiciatis temporibus odio reiciendis error
                    alias debitis atque consequuntur natus iusto recusandae
                    numquam corrupti.
                  </p>

                  <div className="testimonial-author">
                    <h5 className="mb-0 text-capitalize text-color ">
                      James Watson
                    </h5>
                    <p className="text-color ">
                      Excutive Director,SBSA Solutions
                    </p>
                  </div>
                </div>
              </div>
              <div className="testimonial-item position-relative">
                <i className="ti-quote-left text-color "></i>

                <div className="testimonial-item-content">
                  <p className="testimonial-text text-white">
                    Consectetur adipisicing elit. Quam maiores perspiciatis
                    temporibus odio reiciendis error alias debitis atque
                    consequuntur natus iusto recusandae .
                  </p>

                  <div className="testimonial-author">
                    <h5 className="mb-0 text-capitalize text-color">
                      Mickel hussy
                    </h5>
                    <p className="text-color ">
                      Excutive Director,SBSA Solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-70 position-relative">
        <div className="container">
          <div className="cta-block-2 bg-gray p-5 rounded border-1">
            <div className="row justify-content-center align-items-center ">
              <div className="col-lg-7">
                <span className="text-color">For Every type business</span>
                <h2 className="mt-2 mb-4 mb-lg-0">
                  Entrust Your Project to Our Best Team of Professionals
                </h2>
              </div>
              <div className="col-lg-4">
                <Link
                  to="contact.html"
                  className="btn btn-main btn-round-full float-lg-right "
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
