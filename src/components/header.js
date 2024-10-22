import { NavLink, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();
  return (
    <>
      <header className="navigation">
        <div id="navbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg px-0 py-4">
                  <NavLink
                    className={
                      location.pathname === "/" || location.pathname === ""
                        ? "navbar-brand active"
                        : "navbar-brand"
                    }
                    to="/"
                  >
                    SBSA Bilel<span>Solutions.</span>
                  </NavLink>

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
                      <li
                        className={
                          location.pathname === "/" || location.pathname === ""
                            ? "nav-item active"
                            : "nav-item"
                        }
                      >
                        <NavLink className="nav-link" to="/">
                          Home
                        </NavLink>
                      </li>

                      <li
                        className={
                          location.pathname === "/services"
                            ? "nav-item active"
                            : "nav-item"
                        }
                      >
                        <NavLink className="nav-link" to="/services">
                          Services
                        </NavLink>
                      </li>
                      <li
                        className={
                          location.pathname === "/about"
                            ? "nav-item active"
                            : "nav-item"
                        }
                      >
                        <NavLink className="nav-link" to="/about">
                          About
                        </NavLink>
                      </li>
                      <li
                        className={
                          location.pathname === "/contact"
                            ? "nav-item active"
                            : "nav-item"
                        }
                      >
                        <NavLink className="nav-link" to="/contact">
                          Contact
                        </NavLink>
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
