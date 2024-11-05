import React, { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { CommingSoon } from "../components/comming-soon";
import { useTranslation } from "react-i18next";
// Data
import data from "../data";
export function Layout() {
  return (
    <>
      {/* <Header></Header>
      <Outlet />
      <Footer></Footer>*/}
      <CommingSoon />
    </>
  );
}
