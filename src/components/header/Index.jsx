import React from 'react';
import { Link } from 'react-router-dom';

// internal dependencies
//
import Logo from 'components/logo';

const Header = (props) => {
  return (
    <div className="header">
      <div className="header__content">
        <div className="header__logo">
          <Logo />
        </div>
        <div className="header__menu">
          <Link to="/projects">Projects</Link>
          <Link to="/who-i-am">Who I Am</Link>
          <Link to="/coaching">Coaching</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
