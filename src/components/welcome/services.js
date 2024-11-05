import React from "react";
import { useTranslation } from "react-i18next";
export function ServicesSection() {
  const { t } = useTranslation("translation", {
    keyPrefix: "welcome.services",
  });
  return (
    <>
      <section className="section service border-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="section-title">
                <span className="h6 text-color">{t("title")}</span>
                <h2 className="mt-3 content-title ">{t("description")}</h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5">
                <i className="ti-desktop"></i>
                <h4 className="mb-3">{t("web-service")}</h4>
                <p>{t("web-service-description")}</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5 ">
                <i className="ti-layers"></i>
                <h4 className="mb-3">{t("interface-service")}</h4>
                <p>{t("interface-service-description")}</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5">
                <i className="ti-bar-chart"></i>
                <h4 className="mb-3">{t("business-service")}</h4>
                <p>{t("business-service-description")}</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5 mb-lg-0">
                <i className="ti-vector"></i>
                <h4 className="mb-3">{t("Branding-service")} </h4>
                <p>{t("Branding-service-description")}</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5 mb-lg-0">
                <i className="ti-android"></i>
                <h4 className="mb-3">{t("app-development-service")}</h4>
                <p>{t("app-development-service-description")}</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5 mb-lg-0">
                <i className="ti-pencil-alt"></i>
                <h4 className="mb-3">{t("content-service")}</h4>
                <p>{t("content-service-description")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
