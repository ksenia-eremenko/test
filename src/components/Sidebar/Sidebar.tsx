import React from "react";
import Nav from "../Nav/Nav";
import logo from "../../assets/logo.svg"
import image2 from "../../assets/photo-2.jpg"
import classNames from "classnames";

type SidebarType = {
  setOpenMenu: (openMenu: boolean) => void
  openMenu: boolean
}

const Sidebar = ({ setOpenMenu, openMenu }: SidebarType) => {

  return (
    <header className="sidebar">
      <div className="in">
        <div className="top">
          <a href="/" className="logo">
            <img className="logo--image" src={logo} alt="" />
            <div className="logo--text b-title bt26 semibold">Dashboard</div>
          </a>
          <span className="version b-title bt10 medium color7">v.01</span>
        </div>
        <div className="nav-wrapper">
          <Nav openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <div
            className={classNames(
              "menu-icon",
              { active: openMenu }
            )}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <span></span>
          </div>
        </div>
        <div className="bottom">
          <div className="image">
            <img src={image2} alt="" />
          </div>
          <div className="info">
            <div className="b-title bt14 medium">Evano</div>
            <div className="b-title bt12 color7">Project Manager</div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Sidebar