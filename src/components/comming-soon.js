import { Link } from "react-router-dom";

export function CommingSoon() {
  return (
    <>
      <section className="page-title bg-1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <h1 className="text-capitalize mb-4 text-lg">Coming soon</h1>
                <ul className="list-inline">
                  <li className="list-inline-item text-white">
                    We are currently working on a new super awesome website.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-wrap section">
        <div className="container">
          <div className="row">
            <div class="col-lg-3 col-sm-12"></div>
            <div class="col-lg-8 col-sm-12">
              <div class="contact-content pl-lg-5 mt-5 mt-lg-0">
                <span class="text-muted">We are Professionals</span>
                <h2 class="mb-5 mt-2">
                  Don’t Hesitate to contact with us for any kind of information
                </h2>

                <ul class="address-block list-unstyled">
                  <li>
                    <i class="ti-direction mr-3"></i>Tunis, Tunisia
                  </li>
                  <li>
                    <i class="ti-email mr-3"></i>Email:
                    sbsa.business.solutions@gmail.com
                  </li>
                  <li>
                    <i class="ti-mobile mr-3"></i>Phone: +216 22 605 020
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
