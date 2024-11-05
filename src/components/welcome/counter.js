import React from "react";
import { useTranslation } from "react-i18next";
export function Counter() {
  const { t } = useTranslation("translation", {
    keyPrefix: "welcome.counter",
  });
  return (
    <>
      <section className="section counter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="section-title">
                <h2 className="mt-3 content-title ">{t("title")}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-item text-center mb-5 mb-lg-0">
                <h3 className="mb-0">
                  <span className="counter-stat font-weight-bold">28</span> +
                </h3>
                <p className="text-muted">{t("projects-done")}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-item text-center mb-5 mb-lg-0">
                <h3 className="mb-0">
                  <span className="counter-stat font-weight-bold">19 </span>+
                </h3>
                <p className="text-muted">{t("clients")}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-item text-center mb-5 mb-lg-0">
                <h3 className="mb-0">
                  <span className="counter-stat font-weight-bold">5</span>+
                </h3>
                <p className="text-muted">{t("years")}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-item text-center">
                <h3 className="mb-0">
                  <span className="counter-stat font-weight-bold">6</span>+
                </h3>
                <p className="text-muted">{t("team")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
