import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Items = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    text-align: center;
    font-size: 0.8rem;
    flex-basis: 33%;
    padding: 10px;
  }
`;

const References = ({ items }) => {
  return (
    <Items>
      {items.map(({ node }, i) => (
        <li key={node.id}>
          <Img
            fluid={node.thumbnail.fluid}
            title={node.title}
            alt={node.title}
          />
        </li>
      ))}
    </Items>
  );
};

export default References;
