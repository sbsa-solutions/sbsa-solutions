import React from "react";
import { useTranslation } from "react-i18next";
export function CTASection() {
  const { t } = useTranslation("translation", {
    keyPrefix: "welcome.cta",
  });
  return (
    <>
      <section className="section cta">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="cta-item  bg-white p-5 rounded">
                <span className="h6 text-color">{t("title")}</span>
                <h2 className="mt-2 mb-4">{t("sub-title")}</h2>
                <p className="lead mb-4">
                  {t("description-1")}
                  <br /> {t("description-2")}
                </p>
                <h3>
                  <i className="ti-mobile mr-3 text-color"></i>+216 22 605 020
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
