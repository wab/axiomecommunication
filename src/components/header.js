import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { Container } from './utils';
import Logo from './logo';

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
`;

const Header = ({ siteTitle }) => (
  <Container>
    <Wrapper>
      <Logo width="215px" />
    </Wrapper>
  </Container>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
