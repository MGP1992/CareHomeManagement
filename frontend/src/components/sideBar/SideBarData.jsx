import React from "react";
import * as ImIcons from "react-icons/im";
import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";
import {MdOutlineHelp} from "react-icons/md";

export const SideBarData = [
  {
    title: "Home",
    path: "/",
    icons: <ImIcons.ImHome/>,
    cName: "nav-text"
  },
  {
    title: "Residents",
    path: "/residents",
    icons: <BsIcons.BsFillPersonFill />,
    cName: "nav-text",
  },
  {
    title: "My Profile",
    path: "/profile",
    icons: <ImIcons.ImProfile />,
    cName: "nav-text",
  },
  {
    title: "Log Out",
    path: "/login",
    icons: <RiIcons.RiLogoutCircleFill />,
    cName: "nav-text logout-text",
  },
  {
    title: "Help",
    path: "",
    icons: <MdOutlineHelp/>,
    cName: "nav-text logout-text"
  }
];
