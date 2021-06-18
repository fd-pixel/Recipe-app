import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./style";
import codingSvg from "../../assets/coding.svg";

const About = () => {
  return (
    <AboutContainer>
      <StyledImage src={codingSvg} alt="coding" />
      <HeaderContainer>
        <h1>
          About Software Developer <span>Fikret Düzçeker</span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h1>I'm Fikret.</h1>
        <h2>I’m currently learning Full-Stack Development Languages.</h2>
        <h2>
          I've already known Bootstrap5, JS, ReactJS. I'm planning to learn
          ReactNative, Django, MongoDB,SQL.
        </h2>
        <h2>
          <a href="mailto:fikretduzceker5@gmail.com">Send email</a> :
          fikretduzceker5@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
