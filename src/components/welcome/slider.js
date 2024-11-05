import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function Slider() {
  const { t } = useTranslation("translation", { keyPrefix: "welcome.slider" });
  return (
    <>
      <section className="slider">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-10">
              <div className="block">
                <span className="d-block mb-3 text-white text-capitalize">
                  {t("title")}
                </span>
                <h1 className="animated fadeInUp mb-5">{t("description")}</h1>
                <Link
                  to="/services"
                  className="btn btn-main animated fadeInUp btn-round-full"
                  aria-label="Explore Our Services"
                >
                  {t("explore")}
                  <i className="btn-icon fa fa-angle-right ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
