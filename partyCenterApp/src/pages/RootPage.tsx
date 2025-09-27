import { Link, Outlet } from "react-router-dom";
import NavigationComp from "../components/Nav/Nav";

export default function Layout() {
  return (
      <main className="mainComponent">
        <NavigationComp/>
        <Outlet />
      </main>
  );
}