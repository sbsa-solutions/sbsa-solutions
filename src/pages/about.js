import { useTranslation } from "react-i18next";
import React, { useEffect } from "react";
import i18next from "i18next";
import { Link } from "react-router-dom";

export function About() {
  const { t } = useTranslation("translation", {
    keyPrefix: "about",
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
                <span className="text-white">{t("about-us")}</span>
                <h1 className="text-capitalize mb-4 text-lg">
                  {t("our-company")}
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
                    {t("about-us")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-2 position-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-item pr-3 mb-5 mb-lg-0">
                <span className="h6 text-color">{t("what-are-we")}</span>
                <h2 className="mt-3 mb-4 position-relative content-title">
                  {t("answer")}
                </h2>
                <p className="mb-5">{t("long-answer")}</p>

                <Link to="/contact" className="btn btn-main btn-round-full">
                  {t("get-started")}
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-item-img">
                <img
                  loading="lazy"
                  src="images/about/home-7.jpg"
                  alt="about-image"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-info section pt-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="about-info-item mb-4 mb-lg-0">
                <h3 className="mb-3">
                  <span className="text-color mr-2 text-md ">01.</span>
                  {t("our-mission")}
                </h3>
                <p>{t("our-mission-content")}</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="about-info-item mb-4 mb-lg-0">
                <h3 className="mb-3">
                  <span className="text-color mr-2 text-md">02.</span>
                  {t("vission")}
                </h3>
                <p>{t("vission-content")}</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="about-info-item mb-4 mb-lg-0">
                <h3 className="mb-3">
                  <span className="text-color mr-2 text-md">03.</span>
                  {t("our-approach")}
                </h3>
                <p>{t("approach-content")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section counter bg-counter">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-item text-center mb-5 mb-lg-0">
                <i className="ti-check color-one text-md"></i>
                <h3 className="mt-2 mb-0 text-white">
                  <span className="counter-stat font-weight-bold">28</span> +
                </h3>
                <p className="text-white-50">{t("projects")}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-item text-center mb-5 mb-lg-0">
                <i className="ti-user color-one text-md"></i>
                <h3 className="mt-2 mb-0 text-white">
                  <span className="counter-stat font-weight-bold">19 </span>+{" "}
                </h3>
                <p className="text-white-50">{t("clients")}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-item text-center mb-5 mb-lg-0">
                <i className="ti-timer color-one text-md"></i>
                <h3 className="mt-2 mb-0 text-white">
                  <span className="counter-stat font-weight-bold">5</span>+
                </h3>
                <p className="text-white-50">{t("years")}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-item text-center">
                <i className="ti-briefcase color-one  text-md"></i>
                <h3 className="mt-2 mb-0 text-white">
                  <span className="counter-stat font-weight-bold">6</span>+
                </h3>
                <p className="text-white-50">{t("team")} </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
