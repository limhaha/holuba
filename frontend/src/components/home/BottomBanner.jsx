import React from "react";
import styled from "styled-components";
import HomeButton from "./HomeButton";
import { useScrollFadeIn } from "../../hooks";

import { Link } from "react-router-dom";

const S = {
  Wrapper: styled.section`
    width: 100%;
    padding: 120px 0;
    background-color: ${(props) => props.theme.palette.background};
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Label: styled.p`
    display: inline-block;
    ${(props) => props.theme.typography.label};
    color: ${(props) => props.theme.palette.primary};
    margin-bottom: 1rem;
  `,
  Title: styled.h2`
    ${(props) => props.theme.typography.subtitle};
    color: ${(props) => props.theme.palette.black};
    margin-bottom: 2rem;
    text-align: center;
  `,
};

const HomeBanner = () => {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0),
    1: useScrollFadeIn("up", 1, 0.2),
    2: useScrollFadeIn("up", 1, 0.3),
  };

  return (
    <S.Wrapper>
      <S.Label {...animatedItem[0]}>Get Started</S.Label>
      <S.Title {...animatedItem[1]}>
        지금 바로 기부해보세요.
        <br />
      </S.Title>
      <div {...animatedItem[2]}>
        <Link to="/donate">
          <HomeButton fill="solid" type="button">
            기부하기
          </HomeButton>
        </Link>
      </div>
    </S.Wrapper>
  );
};

export default HomeBanner;
