import React from 'react';

import './Card.css';

interface Props {
  children: React.ReactNode;
  classNames?: string[];
}

const Card: React.FC<Props> = ({ children, classNames }) => {
  const classes = classNames ? [...classNames, 'card'].join(' ') : 'card';
  return <div className={classes}>{children}</div>;
};

export default Card;
