import React, { FC } from "react";
import "./Header.css";
import dashboardLogo from './dashboard.svg';

const Header: FC = () => {
  return (
    <header className="header">
        <img src={dashboardLogo} alt=""/>
        <h1>Dashboard</h1>
    </header>
  );
};
export default Header;
