import React from "react";
import styled from "styled-components";

import HomeButton from "./HomeButton";
import HomeTextField from "./HomeTextField";

import { contactImage } from "../../assets";
import { useScrollFadeIn } from "../../hooks";

const S = {
  Wrapper: styled.section`
    width: 100%;
    width: 1180px;
    margin: auto;
    padding: 120px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  Image: styled.div`
    width: 580px;
    height: 580px;
    background: no-repeat center/cover url(${contactImage});
  `,
  TextWrapper: styled.div`
    box-sizing: border-box;
    width: 580px;
    padding-left: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    margin-bottom: 1rem;
  `,
  Description: styled.p`
    ${(props) => props.theme.typography.description};
    color: ${(props) => props.theme.palette.black};
    margin-bottom: 2rem;
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;
    input {
      margin-bottom: 1rem;
      width: 70%;
    }
    button {
      width: 70%;
    }
  `,
};

const Contact = () => {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0),
    1: useScrollFadeIn("up", 1, 0.2),
    2: useScrollFadeIn("up", 1, 0.3),
    3: useScrollFadeIn("up", 1, 0.4),
  };

  return (
    <S.Wrapper>
      <S.Image image={contactImage} />
      <S.TextWrapper>
        <S.Label {...animatedItem[0]}>Contact us</S.Label>
        <S.Title {...animatedItem[1]}>기부가 필요하신가요?</S.Title>
        <S.Description {...animatedItem[2]}>
          기부가 필요한 곳이 있으면 이메일을 보내주세요.
        </S.Description>
        <S.Form {...animatedItem[3]}>
          <HomeTextField type="text" placeholder="Name" />
          <HomeTextField type="text" placeholder="Email Address" />
          <HomeTextField type="text" placeholder="Company Name" />
          <HomeButton fill="solid" type="submit">
            제출
          </HomeButton>
        </S.Form>
      </S.TextWrapper>
    </S.Wrapper>
  );
};

export default Contact;
