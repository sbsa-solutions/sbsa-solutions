import { Link } from "react-router-dom";

export function Slider() {
  return (
    <>
      <section className="slider">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-10">
              <div className="block">
                <span className="d-block mb-3 text-white text-capitalize">
                  Creating the Future Together.
                </span>
                <h1 className="animated fadeInUp mb-5">
                  Our work is a
                  <br />
                  testament to our
                  <br />
                  capabilities.
                </h1>
                <Link
                  to="/services"
                  className="btn btn-main animated fadeInUp btn-round-full"
                  aria-label="Explore Our Services"
                >
                  Explore Our Services
                  <i className="btn-icon fa fa-angle-right ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
