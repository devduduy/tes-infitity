import React from "react";
import Button from "elements/Button";
import { Link } from "react-router-dom";

const Header = (props) => {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? "active" : "";
  };

  return (
    <header className="spacing-sm" style={{ zIndex: 4 }}>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item dropdown`}>
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Services
                </Link>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
              <li className={`nav-item ${getNavLinkClass("/portfolio")}`}>
                <Button className="nav-link" href="/portfolio" type="link">
                  Portfolio
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkClass("/about")}`}>
                <Button className="nav-link" href="/about" type="link">
                  About
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkClass("/contactUs")}`}>
                <Button
                  className="nav-link contact-us"
                  href="/contactUs"
                  type="link"
                  hasShadow
                  isPrimary
                >
                  Contact us
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
