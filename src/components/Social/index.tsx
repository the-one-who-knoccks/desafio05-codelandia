import React from 'react';
import { Container } from './styles';

import instagramIcon from '../../assets/social/instagram.svg';
import facebookIcon from '../../assets/social/facebook.svg';
import youtubeIcon from '../../assets/social/youtube.svg';
import twitterIcon from '../../assets/social/twitter.svg';


export function Social() {
  return (
    <Container>
      <div>
        <img src={facebookIcon} alt="icone do facebook" />
      </div>

      <div>
        <img src={instagramIcon} alt="icone do instagram" />
      </div>

      <div>
        <img src={twitterIcon} alt="icone do twitter" />
      </div>

      <div>
        <img src={youtubeIcon} alt="icone do youtube" />
      </div>

    </Container>
  )


}