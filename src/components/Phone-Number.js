import React from "react";
import { useTranslation } from "react-i18next";

const PhoneNumber = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "comming",
  });

  return <>{t("phone-number")}</>;
};

export default PhoneNumber;
