import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function SwitchLang() {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    console.log("language changed!");
  };
  return (
    <>
      <ul class="nav ml-auto">
        <li class="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle  text-white"
            to="#"
            id="languageDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {i18n.language}
            <i className="ml-1 fas fa-chevron-down small"></i>
          </Link>
          <div
            class="dropdown-menu dropdown-menu-right w-auto"
            aria-labelledby="languageDropdown"
          >
            <Link
              className={
                i18n.language === "en"
                  ? "dropdown-item active"
                  : "dropdown-item"
              }
              to="#"
              onClick={() => changeLanguage("en")}
            >
              EN
            </Link>
            <Link
              className={
                i18n.language === "fr"
                  ? "dropdown-item active"
                  : "dropdown-item"
              }
              to="#"
              onClick={() => changeLanguage("fr")}
            >
              FR
            </Link>
            <Link
              className={
                i18n.language === "ar"
                  ? "dropdown-item active"
                  : "dropdown-item"
              }
              to="#"
              onClick={() => changeLanguage("ar")}
            >
              AR
            </Link>
          </div>
        </li>
      </ul>
    </>
  );
}
export default SwitchLang;
