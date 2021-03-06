import React from "react";
import styled from "styled-components";
import { useScrollFadeIn } from "../../hooks";
import HomeButtom from "./HomeButton";
import { Link } from "react-router-dom";

const S = {
  Wrapper: styled.section`
    width: 100%;
    max-width: 1180px;
    margin: auto;
    padding: 120px 0;
    margin-top: 680px;
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
    text-align: center;
    margin-bottom: 4rem;
  `,
  ItemWrapper: styled.ul`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  ItemBox: styled.li`
    width: 380px;
    padding: 3rem 2rem;
    text-align: center;
    background-color: ${(props) => props.theme.palette.white};
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 16px 8px rgba(0, 0, 0, 0.03);
    border-radius: 0.5rem;
  `,
  ItemTitle: styled.h3`
    ${(props) => props.theme.typography.heading};
    color: ${(props) => props.theme.palette.black};
    margin-bottom: 1rem;
  `,
  ItemDescription: styled.p`
    ${(props) => props.theme.typography.description};
    margin-bottom: 1.5rem;
  `,
  ItemButton: styled.button`
    ${(props) => props.theme.typography.textbutton};
    color: ${(props) => props.theme.palette.secondary};
    margin-top: auto;
    cursor: pointer;
  `,
};

const SERVICES_ITEMS = [
  {
    title: "Donate",
    description:
      "우크라이나에 기부해보세요. 클릭해 기부하면 NFT를 받을 수 있습니다!",
    button: "기부하기",
    link: "/donate",
  },
  {
    title: "Market",
    description: "이더리움을 통해서 의미있는 토큰을 교환할 수 있습니다!",
    button: "교환하기",
    link: "/market",
  },
  {
    title: "Ranking",
    description: "많은 기부를 통해 기부자 랭킹 Top 10에 도전하세요!",
    button: "랭킹보기",
    link: "/ranking",
  },
];

const Services = () => {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0),
    1: useScrollFadeIn("up", 1, 0.2),
    2: useScrollFadeIn("up", 1, 0.3),
  };

  return (
    <S.Wrapper>
      <S.Label>Our Services</S.Label>
      <S.Title>Holuba</S.Title>
      <S.ItemWrapper>
        {SERVICES_ITEMS.map((item, index) => (
          <S.ItemBox key={item.title} {...animatedItem[index]}>
            <S.ItemTitle>{item.title}</S.ItemTitle>
            <br />
            <br />
            <S.ItemDescription>{item.description}</S.ItemDescription>
            <br />

            <Link to={item.link}>
              <HomeButtom>{item.button}</HomeButtom>
            </Link>
          </S.ItemBox>
        ))}
      </S.ItemWrapper>
    </S.Wrapper>
  );
};

export default Services;
