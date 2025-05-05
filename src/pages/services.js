import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function Services() {
  const { t } = useTranslation("translation", {
    keyPrefix: "services",
  });
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <section className="page-title bg-1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <span className="text-white">{t("title")}</span>
                <h1 className="text-capitalize mb-4 text-lg">
                  {t("what-we-do")}
                </h1>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <Link to="/" className="text-white">
                      {t("home")}
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <span className="text-white">/</span>
                  </li>
                  <li className="list-inline-item text-white-50">
                    {t("our-services")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section service border-top pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="section-title">
                <span className="h6 text-color">{t("our-services")}</span>
                <h2 className="mt-3 content-title ">
                  {t("our-services-description")}
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5">
                <i className="ti-desktop"></i>
                <h4 className="mb-3">{t("web-dev")}</h4>
                <p>{t("web-dev-description")}</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5">
                <i className="ti-layers"></i>
                <h4 className="mb-3">{t("interface-design")}</h4>
                <p>{t("interface-design-desc")}</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5">
                <i className="ti-bar-chart"></i>
                <h4 className="mb-3">{t("business-consulting")}</h4>
                <p>{t("business-consulting-desc")}</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5">
                <i className="ti-vector"></i>
                <h4 className="mb-3">{t("branding")}</h4>
                <p>{t("branding-desc")}</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5">
                <i className="ti-android"></i>
                <h4 className="mb-3">{t("app-dev")}</h4>
                <p>{t("app-dev-desc")}</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5">
                <i className="ti-pencil-alt"></i>
                <h4 className="mb-3">{t("content-creation")}</h4>
                <p>{t("content-creation-desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-2">
        <div className="container">
          <div className="cta-block p-5 rounded">
            <div className="row justify-content-center align-items-center ">
              <div className="col-lg-7 text-center text-lg-left">
                <span className="text-color">{t("every-business")}</span>
                <h2 className="mt-2 text-white">{t("entrust-project")}</h2>
              </div>
              <div className="col-lg-4 text-center text-lg-right mt-4 mt-lg-0">
                <Link to="/contact" className="btn btn-main btn-round-full">
                  {t("contact-us")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
