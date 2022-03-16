// import React, { useState } from 'react';
import Image1 from '../../images/Image1-COMPRESSED.jpg';
import {
  // ArrowForward,
  // ArrowRight,
  HeroBg,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  ImgBg,
} from './HeroElements';

const HeroSection = () => {
  // const [hover, setHover] = useState(false);
  // const onHover = () => {
  //   setHover(!hover);
  // };
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <ImgBg src={Image1} />
      </HeroBg>
      <HeroContent>
        <HeroH1>Lifecare Essendon</HeroH1>
        <HeroP>Leaders in physiotherapy and sports medicine</HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
