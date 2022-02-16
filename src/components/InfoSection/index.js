import React from 'react';
import {
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from './InfoElements';

const InfoSection = ({
  lightBg,
  primary,
  dark,
  dark2,
  id,
  img,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  alt,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                {/* <TopLine>{topLine}</TopLine> */}
                <Heading lightText={lightText}>{headline}</Heading>
                {/* <Subtitle darkText={darkText}>{description}</Subtitle> */}
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
