import React from 'react';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import { Container } from './utils';

const Wrapper = styled(Container)`
  text-align: center;
  color: ${themeGet('colors.grey.medium')};
  border-top: solid 1px ${themeGet('colors.grey.light')};

  a,
  a:visited {
    color: ${themeGet('colors.primary.medium')};
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
      color: ${themeGet('colors.primary.dark')};
    }
  }
`;

const Footer = () => (
    <Wrapper fontSize={1}>
      06.83.05.06.06 •{' '}
      <a href="https://fr.linkedin.com/in/elodie-boileux-marchand-b457142b">
        linkedin
      </a>{' '}
      • © 2018, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
    </Wrapper>
);

export default Footer;
