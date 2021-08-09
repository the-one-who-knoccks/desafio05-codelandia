import React, { ButtonHTMLAttributes } from 'react';

import playIcon from '../../assets/social/play.svg';
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outlined?: boolean;
}

const WatchNowButton: React.FC<ButtonProps> = ({

  outlined = false,
  children,
  ...rest
}) => {
  return (
    <Container {...rest}>
      {children}
      <img src={playIcon} alt="" />
    </Container>
  );
};

export default WatchNowButton;