import React, { useState, useLayoutEffect } from "react";
import { logo } from "assets";

const Header = () => {
  const [isScreenScrolled, setIsScreenScrolled] = useState(false);

  useLayoutEffect(() => {
    window.addEventListener("scroll", () =>
      setIsScreenScrolled(window.scrollY === 0 ? false : true)
    );
  }, [window.scrollY]);

  const renderScrolledHeader = () => {
    return (
      <header className="headerContainerScrolled">
        <div className="headerContent">
          <figure>
            <img className="headerLogoScrolled" src={logo} />
          </figure>
          <div className="headingScrolled">top games</div>
        </div>
      </header>
    );
  };

  const renderMainHeader = () => {
    return (
      <header className="headerContainer">
        <div className="headerContent">
          <figure>
            <img className="headerLogo" src={logo} />
          </figure>
          <div className="heading">top games</div>
        </div>
      </header>
    );
  };

  return isScreenScrolled ? renderScrolledHeader() : renderMainHeader();
};

export default Header;
