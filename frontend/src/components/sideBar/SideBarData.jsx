import React from "react";
import * as ImIcons from "react-icons/im";
import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri"

export const SideBarData = [
  {
    title: "Residents",
    path: "/residents",
    icons: <BsIcons.BsFillPersonFill />,
    cName: "nav-text",
  },
  {
    title: "Business",
    path: "/business",
    icons: <BsIcons.BsFillBuildingsFill />,
    cName: "nav-text",
  },
  {
    title: "Messages",
    path: "/message",
    icons: <BsIcons.BsFillChatDotsFill />,
    cName: "nav-text",
  },
  {
    title: "My Profile",
    path: "/carers/profile",
    icons: <ImIcons.ImProfile />,
    cName: "nav-text",
  },
  {
    title: "Log Out",
    path: "/login",
    icons: <RiIcons.RiLogoutCircleFill />,
    cName: "nav-text logout-text",
  },
];
