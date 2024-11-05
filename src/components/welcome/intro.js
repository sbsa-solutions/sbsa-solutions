import React from "react";
import { useTranslation } from "react-i18next";
export function Intro() {
  const { t } = useTranslation("translation", {
    keyPrefix: "welcome.intro",
  });
  return (
    <>
      <section className="section intro">
        <div className="container">
          <div className="row ">
            <div className="col-lg-8">
              <div className="section-title">
                <span className="h6 text-color ">{t("title")}</span>
                <h2 className="mt-3 content-title">{t("description")}</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="intro-item mb-5 mb-lg-0">
                <i className="ti-desktop color-one"></i>
                <h4 className="mt-4 mb-3">{t("title-1")}</h4>
                <p>{t("description-1")}</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="intro-item mb-5 mb-lg-0">
                <i className="ti-medall color-one"></i>
                <h4 className="mt-4 mb-3">{t("title-2")}</h4>
                <p>{t("description-2")}</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="intro-item">
                <i className="ti-layers-alt color-one"></i>
                <h4 className="mt-4 mb-3">{t("title-3")}</h4>
                <p>{t("description-3")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
