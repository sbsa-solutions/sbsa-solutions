import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function TestimonialSection() {
  const { t } = useTranslation("translation", {
    keyPrefix: "welcome.testimonial",
  });
  return (
    <>
      <section className="mt-70 position-relative">
        <div className="container">
          <div className="cta-block-2 bg-gray p-5 rounded border-1">
            <div className="row justify-content-center align-items-center ">
              <div className="col-lg-7">
                <span className="text-color"> {t("title")}</span>
                <h2 className="mt-2 mb-4 mb-lg-0">{t("description")}</h2>
              </div>
              <div className="col-lg-4">
                <Link
                  to="/contact"
                  className="btn btn-main btn-round-full float-lg-right "
                >
                  {t("contact")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
