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
  textAlign,
} from 'styled-system';
import tag from 'clean-tag';

export const Box = styled.div`
  ${space}
  ${width}
  ${maxWidth}
  ${fontSize}
  ${color}

  > *:last-child {
    margin-bottom: 0;
  }
`;

export const Container = ({ ...props }) => (
  <Box mx="auto" py={2} px={3} maxWidth={728} {...props} />
);

export const Heading = styled(tag.h2)`
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${space}
  ${color}
  ${textAlign}
`;
