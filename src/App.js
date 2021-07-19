import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { FaCaretDown } from "react-icons/fa";

function App() {
  return (
    <Navabar>
      <NavItem icon={<FaPlus />} />
      <NavItem icon={<FaBell />} />
      <NavItem icon={<AiFillMessage />} />
      <NavItem icon={<FaCaretDown />}>
        <DropDownMenu />
      </NavItem>
    </Navabar>
  );
}

function Navabar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setopen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setopen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}

function DropDownMenu() {
  function DropDownItem(props) {
    return (
      <a href="#" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown">
      <DropDownItem> My Profile</DropDownItem>
      <DropDownItem leftIcon="<"></DropDownItem>
    </div>
  );
}

export default App;
