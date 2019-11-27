import React from 'react';
import { Link } from 'react-router-dom';

// internal dependencies
//
import Logo from 'components/logo';

const Header = (props) => {
  const { setContactModal } = props;

  // toggles contact modal
  const toggleContactModal = (e) => {
    e.preventDefault();
    setContactModal(true);
  };

  return (
    <div className="header">
      <div className="header__content">
        <div className="header__logo">
          <Logo />
        </div>
        <div className="header__menu">
          <Link to="/who-i-am">Who I Am</Link>
          <Link to="/projects">My Projects</Link>
          <a href="" onClick={(e) => toggleContactModal(e)}>
            Contact
          </a>
        </div>

        <div className="header__mobile-menu-toggle">Menu</div>
      </div>
    </div>
  );
};

export default Header;
