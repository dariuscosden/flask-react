import React from 'react';

// internal dependencies
//
import Logo from 'components/logo';

const Footer = (props) => {
  return (
    <div className="footer">
      <Logo /> | © {new Date().getFullYear()}
    </div>
  );
};

export default Footer;
