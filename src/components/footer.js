import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import PhoneNumber from "./Phone-Number";

export function Footer() {
  const { t } = useTranslation("translation", {
    keyPrefix: "footer",
  });
  return (
    <>
      <footer className="footer section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget">
                <h4 className="text-capitalize mb-4">{t("quick-links")}</h4>

                <ul className="list-unstyled footer-menu lh-35">
                  <li>
                    <Link to="/about">{t("about")}</Link>
                  </li>
                  <li>
                    <Link to="/services">{t("services")}</Link>
                  </li>

                  <li>
                    <Link to="/contact">{t("contact")}</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 mx-auto">
              <div className="widget">
                <div className="logo mb-4">
                  <h3>
                    SBSA<span>Solutions</span>
                  </h3>
                </div>
                <h6>
                  <i className="ti-email mr-2"></i>
                  <Link to="mailto:sbsa.business.solutions@gmail.com">
                    sbsa.business.solutions@gmail.com
                  </Link>
                </h6>
                <i className="ti-mobile mr-2"></i>
                <Link to="tel:+216-22605020">
                  <span className="text-color h4">
                    <PhoneNumber />
                  </span>
                </Link>

                {/***/}
              </div>
            </div>
          </div>
          {/***/}{" "}
          <div className="footer-btm pt-4">
            <div className="row">
              <div className="col-lg-6">
                <div className="copyright">
                  {t("copyright")} &copy; {t("developed-by")}
                  <Link to="https://sbsa-solutions.web.app/" className="ml-2">
                    SBSA<span className="text-color">Solutions.</span>
                  </Link>
                </div>
              </div>
              {/*  <div className="col-lg-6 text-left text-lg-right">
                <ul className="list-inline footer-socials">
                  <li className="list-inline-item">
                    <Link
                      to="https://www.facebook.com/profile.php?id=61567465980932"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f mr-2"></i>Facebook
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      to="https://www.youtube.com/@sbsa.solutions"
                      target="_blank"
                    >
                      <i className="fab fa-youtube mr-2"></i>Youtube
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      to="https://www.instagram.com/sbsa.solutions/"
                      target="_blank"
                    >
                      <i className="fab fa-instagram mr-2"></i>Instagram
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      to="https://www.tiktok.com/@sbsa.solutions"
                      target="_blank"
                    >
                      <i className="fab fa-tiktok mr-2"></i>TikTok
                    </Link>
                  </li>
                </ul>
              </div>
              */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
