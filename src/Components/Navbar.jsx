import React from "react";
import jigirizLogo from "../images/Jigiriz-light.png";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SideBarData } from "./SideBarData";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import "./Navbar.css";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShoppingCart from "./ShoppingCart";
import { useSelector } from "react-redux";

function Navbar() {
  const getdata = useSelector((state) => state.cartreducer.carts);

  const [sidebar, setSidebar] = React.useState(false);

  const sidebarData = SideBarData.map((item, index) => {
    return (
      <li key={index} className={item.cName}>
        <Link to={item.path}>
          <div>{item.icon}</div>
          <div>
            <span>{item.title}</span>
          </div>
        </Link>
      </li>
    );
  });

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="navbar navbar-light bg-light justify-content-start">
        <div className="menu-bars bg-light align-self-center">
          <DensityMediumIcon onClick={showSidebar} />
        </div>
        <div>
          <a className="navbar-brand align-self-center" href="/home">
            <img className="jigiriz-logo" src={jigirizLogo} alt="jigiriz" />
            <span className="logo-text font-weight-bold">Jigiriz</span>
          </a>
        </div>

        <div className="search-bar ms-auto">
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <InputBase
              placeholder="Search any product"
              sx={{ width: "100%" }}
              inputProps={{ "aria-label": "search any product" }}
            />
            <IconButton type="submit" sx={{ p: "2px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
        <div className="d-flex sign-in ms-auto justify-content-between">
          <div className="profile-icon d-flex align-self-center justify-content-center flex-column">
            <div>
              <PermIdentityOutlinedIcon />
            </div>
            <div>
              <span>Profile</span>
            </div>
          </div>
          <div className=" shopping-cart-icon d-flex align-self-center justify-content-center flex-column">
            <ShoppingCart />
          </div>
        </div>
      </div>
      <nav
        className={sidebar ? "nav-menu active bg-light" : "nav-menu bg-light"}
      >
        <ul className="nav-menu-items bg-light" onClick={showSidebar}>
          <li className="navbar-toggle bg-light">
            <div className="menu-bars bg-light">
              <AiIcons.AiOutlineClose />
            </div>
          </li>
          {sidebarData}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
