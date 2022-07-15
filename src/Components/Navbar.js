import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import { links } from "../variables";

const Navbar = () => {
  const { NavId, setNavId, openSubMenu, setOpenSubMenu } = useGlobalContext();
  const [showMenu, setShowMenu] = useState(false);

  const handleButton = () => {
    const app = document.querySelector(".App");
    if (showMenu) {
      app.style.overflowY = "auto";
    } else {
      app.style.overflowY = "hidden";
    }
    setNavId(0);
    setOpenSubMenu(false);
    setShowMenu(!showMenu);
  };

  const handleBackBtn = () => {
    setOpenSubMenu(false);
    setNavId(0);
  };

  const openMenu = (id) => {
    if (id === NavId) {
      setOpenSubMenu(false);
      setNavId(0);
    } else {
      setNavId((current) => {
        return (current = id);
      });
    }
  };

  useEffect(() => {
    if (NavId !== 4 && NavId !== 0) {
      setOpenSubMenu(true);
    }
  }, [NavId, setOpenSubMenu]);

  return (
    <nav id="navbar" className={showMenu ? "active-navbar" : undefined}>
      <div className="navbar-wrapper">
        <div className={`logo ${openSubMenu && "inactive-logo"}`}>
          <span>T</span>
          <h4>Trello</h4>
        </div>
        <div
          className={`btn ${showMenu ? "active-btn" : undefined}`}
          onClick={handleButton}
        >
          <span></span>
        </div>
        <div
          className={`back-btn ${openSubMenu && "active-back-btn"}`}
          onClick={handleBackBtn}
        >
          Back
        </div>
      </div>
      <ul className={`links ${openSubMenu && "inactive-links"}`}>
        {links.map((link) => {
          return (
            <li
              className={link.id === NavId ? "activeLink" : undefined}
              key={link.id}
              onClick={() => openMenu(link.id)}
            >
              {link.name !== "Pricing" ? (
                <>
                  <span>{link.name}</span>
                  <span className="arrow"></span>
                </>
              ) : (
                <a href={link.url}>{link.name}</a>
              )}
            </li>
          );
        })}
      </ul>
      {/* <SubMenu /> */}
    </nav>
  );
};

export default Navbar;
