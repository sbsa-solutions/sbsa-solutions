import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
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
                <span className="h6 text-color">
                  <i className="ti-email mr-3"></i>
                  <Link
                    to="mailto:sbsa.business.solutions@gmail.com"
                    className="text-color"
                  >
                    sbsa.business.solutions@gmail.com
                  </Link>
                </span>
                <br />
                <span className="h6 text-color">
                  <i className="ti-mobile mr-3 text-color"></i>+216 22 605 020
                </span>
                {/**/}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
