import { Link, Outlet, useLocation } from "react-router-dom";
import NavigationComp from "../components/Nav/Nav";
import { useEffect } from "react";

export default function Layout() {

   const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        // give router a tick to render the page first
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }else{
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
      <main className="mainComponent">
        <NavigationComp/>
        <Outlet />
      </main>
  );
}