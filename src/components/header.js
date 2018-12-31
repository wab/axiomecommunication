import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Logo from './logo';

const Header = ({ siteTitle }) => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: 960,
      padding: `2rem`,
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <Logo width="350px" />
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
