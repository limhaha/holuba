import React from "react";
import styled from "styled-components";
import { donation } from "../../assets";
import HomeButton from "./HomeButton";

import { Link } from "react-router-dom";

const S = {
  Background: styled.section`
    position: absolute;
    top: 81px;
    width: 100%;
    height: 700px;
    background: no-repeat center/cover url(${donation});
  `,
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
    max-width: 1180px;
    padding-top: 100px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  Title: styled.h1`
    ${(props) => props.theme.typography.title};
    color: #fff;
    margin-bottom: 0.5rem;
  `,
  Description: styled.p`
    ${(props) => props.theme.typography.description};
    color: ${(props) => props.theme.palette.white};
    margin-bottom: 2rem;
  `,
};

const TopBanner = () => {
  return (
    <S.Background>
      <S.Wrapper>
        <S.Title>Holuba</S.Title>
        <S.Description>
          우크라이나에 기부해서 NFT를 받아가세요.
          <br />
          1번 클릭시 1개의 토큰을 얻을 수 있습니다. 여러분의 손길을 기다립니다.
        </S.Description>
        <Link to="/donate">
          <HomeButton fill="solid" type="button">
            기부하기
          </HomeButton>
        </Link>
      </S.Wrapper>
    </S.Background>
  );
};

export default TopBanner;
