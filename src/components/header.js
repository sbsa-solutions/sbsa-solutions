import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import SwitchLang from "./header/SwitchLang";
import { useTranslation } from "react-i18next";
import "./header/header.css";

export function Header() {
  const location = useLocation();
  const { t } = useTranslation("translation", {
    keyPrefix: "header",
  });
  return (
    <>
      <header className="navigation">
        <div id="navbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg px-0 py-4 sticky-top ">
                  <NavLink
                    className={
                      location.pathname === "/" || location.pathname === ""
                        ? "navbar-brand active"
                        : "navbar-brand"
                    }
                    to="/"
                  >
                    SBSA<span>Solutions</span>
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
                          {t("home")}
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
                          {t("services")}
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
                          {t("about")}
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
                          {t("contact")}
                        </NavLink>
                      </li>
                    </ul>

                    <SwitchLang />
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
