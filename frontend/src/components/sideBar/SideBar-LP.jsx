import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SideBarData } from "./SideBarData";
import "./SideBar-LP.css";
import { IconContext } from "react-icons";

const SideBarLP = () => {
  const [sideBar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sideBar);
  const user = JSON.parse(window.localStorage.getItem("user"));

  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
        <div className="sidebar-lp">
          <Link to="#" className="menu-bars-lp open-bars">
            <FaIcons.FaBars onClick={showSideBar} />
          </Link>
        </div>
        <nav className={sideBar ? "nav-menu-lp active" : "nav-menu-lp"}>
          <ul className="nav-menu-items-lp" onClick={showSideBar}>
            <li className="navbar-toggle-lp">
              <Link to="#" className="menu-bars-lp close-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SideBarData.map((item, index) => {
              if (item.path === "/profile" && user.residentID) {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={`/residents/profile/${user.residentID}`}>
                      {item.icons}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              } else if (item.path === "/profile" && user.staffID) {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={`/carers/profile`}>
                      {item.icons}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              } 
              if (item.path === "/login") {
                return (
                  <li
                    key={index}
                    className={item.cName}
                    onClick={() => {
                      window.localStorage.clear();
                    }}
                  >
                    <Link to={item.path}>
                      {item.icons}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              } else {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icons}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};
export default SideBarLP;
