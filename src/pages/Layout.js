import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { CommingSoon } from "../components/comming-soon";

export function Layout() {
  return (
    <>
      {/*<Header></Header>
      <Outlet />
      <Footer></Footer>*/}
      <CommingSoon />
    </>
  );
}
