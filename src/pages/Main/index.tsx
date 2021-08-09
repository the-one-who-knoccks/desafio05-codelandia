import React from 'react';
import logImage from '../../assets/logo.svg';
import chichiroImage from '../../assets/ilustracao.png';

import { Container, Content } from './styles';
import {Social} from '../../components/Social';
import WatchNowButton from '../../components/WatchNowButton';
import WatchTrailerButton from '../../components/WatchTrailerButton';

const Main: React.FC = () => {
  return (
    <>
    <Container>
      <img src={logImage} className="logoImage" alt="imagem da logo" />
      <img src={chichiroImage} className="chichiro" alt="" />
      <Social />
      <Content>
        <h3>Hayao Miyazaki</h3>
        <h1>A Viagem de Chihiro</h1>
        <p>Chihiro chega a um mundo mágico dominado
          por uma bruxa. Aqueles que a desobedecem são
          transformados em animais.
        </p>
      </Content>
      <WatchNowButton>
        Assistir Agora
      </WatchNowButton>
      <WatchTrailerButton>
        Assistir o trailer
      </WatchTrailerButton>

    </Container>
    </>
  )
}

export default Main;