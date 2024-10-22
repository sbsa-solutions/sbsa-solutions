import { Link } from "react-router-dom";

export function CommingSoon() {
  return (
    <>
      <section className="page-title bg-1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <h1 className="text-capitalize mb-4 text-lg">
                  We are currently working on a new super awesome website.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-wrap section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 ">
              <div className="block text-center">
                <h1 className="text-capitalize mb-4 text-lg">
                  We are Professionals
                </h1>
                <h2 className="mb-5 mt-2">
                  Don’t Hesitate to contact with us for any kind of information
                </h2>
                <ul className="list-inline">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
