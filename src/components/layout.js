import { useState } from "react";
import { Outlet, useLocation } from "react-router";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="relative">
      <nav className={`navbar ${location.pathname == "/" ? "absolute" : ""}`}>
        <div className="container">
            
          <ul className={`nav-links`} id="nav-links">
            <li>
              <a href="/Toprated">Top rated</a>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};
export default Layout;
