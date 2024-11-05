import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function AboutSection() {
  const { t } = useTranslation("translation", {
    keyPrefix: "welcome.about",
  });
  return (
    <>
      <section className="section about position-relative">
        <div className="bg-about"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6 offset-md-0">
              <div className="about-item ">
                <span className="h6 text-color">{t("what-are-we")}</span>
                <h2 className="mt-3 mb-4 position-relative content-title">
                  {t("answer")}
                </h2>
                <div className="about-content">
                  <h4 className="mb-3 position-relative">
                    {t("about-content-title")}
                  </h4>
                  <p className="mb-5">{t("about-content-description")}</p>

                  <Link to="/contact" className="btn btn-main btn-round-full">
                    {t("get-started")}
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
