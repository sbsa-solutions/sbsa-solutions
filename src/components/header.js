import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
      <header className="navigation">
        <div id="navbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg px-0 py-4">
                  <Link className="navbar-brand" to="/">
                    SBSA<span>Solutions.</span>
                  </Link>

                  <button
                    className="navbar-toggler collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarsExample09"
                    aria-controls="navbarsExample09"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="fa fa-bars"></span>
                  </button>

                  <div
                    className="collapse navbar-collapse text-center"
                    id="navbarsExample09"
                  >
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <Link className="nav-link" to="/">
                          Home
                        </Link>
                      </li>

                      <li className="nav-item @@service">
                        <Link className="nav-link" to="/services">
                          Services
                        </Link>
                      </li>
                      <li className="nav-item @@contact">
                        <Link className="nav-link" to="/about">
                          About
                        </Link>
                      </li>
                      <li className="nav-item @@contact">
                        <Link className="nav-link" to="/contact">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
