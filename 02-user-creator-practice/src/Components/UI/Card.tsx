import React from 'react';

import styled, { FlattenSimpleInterpolation } from 'styled-components';

const CardWrapper = styled.div<{ styles: FlattenSimpleInterpolation }>`
  background: white;
  box-shadow: 0 2px 8px rbga(0, 0, 0, 0.26);
  border-radius: 10px;

  ${({ styles }) => styles}
`;

interface Props {
  children: React.ReactNode;
  styles?: FlattenSimpleInterpolation;
}

const Card: React.FC<Props> = ({ children, styles = [] }) => {
  return <CardWrapper styles={styles}>{children}</CardWrapper>;
};

export default Card;
