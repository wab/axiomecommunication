import React from 'react';
import styled from 'styled-components';
import {
  space,
  width,
  fontSize,
  color,
  maxWidth,
  fontWeight,
  lineHeight,
} from 'styled-system';
import tag from 'clean-tag';

export const Box = styled.div`
  ${space}
  ${width}
  ${maxWidth}
  ${fontSize}
  ${color}
`;

export const Container = ({ ...props }) => (
  <Box mx="auto" py={3} maxWidth={650} color="grey.dark" {...props} />
);

export const Heading = styled(tag.h2)`
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${space}
  ${color}
`;
