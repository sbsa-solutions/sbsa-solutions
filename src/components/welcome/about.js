import { Link } from "react-router-dom";

export function AboutSection() {
  return (
    <>
      <section className="section about position-relative">
        <div className="bg-about"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6 offset-md-0">
              <div className="about-item ">
                <span className="h6 text-color">What we are</span>
                <h2 className="mt-3 mb-4 position-relative content-title">
                  Innovative Minds, Collaborative Spirit
                </h2>
                <div className="about-content">
                  <h4 className="mb-3 position-relative">
                    Your Software Development Partner
                  </h4>
                  <p className="mb-5">
                    We provide expert consulting in software design and
                    development, helping companies optimize their processes and
                    achieve operational excellence through tailored technology
                    solutions.
                  </p>

                  <Link to="/contact" className="btn btn-main btn-round-full">
                    Get started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
