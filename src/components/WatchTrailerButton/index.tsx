import React, { ButtonHTMLAttributes } from 'react';


import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outlined?: boolean;
}

const WatchTrailerButton: React.FC<ButtonProps> = ({

  outlined = false,
  children,
  ...rest
}) => {
  return (
    <Container {...rest}>
      {children}
    </Container>
  );
};

export default WatchTrailerButton;