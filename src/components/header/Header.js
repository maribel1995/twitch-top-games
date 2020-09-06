import React from "react";
import { logoHeader, logoFooter } from "assets";

const Header = () => {
  return (
    <header className="headerContainer">
      <div className="headerContent">
        <figure>
          <img className="headerLogo" src={logoFooter} />
        </figure>
        <div className="heading">top games</div>
      </div>
    </header>
  );
};

export default Header;
