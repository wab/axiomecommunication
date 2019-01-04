import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import Logo from './logo';

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  ${space}
`;

const Header = ({ siteTitle }) => (
  <Wrapper py={3}>
    <Logo width="215px" />
  </Wrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
