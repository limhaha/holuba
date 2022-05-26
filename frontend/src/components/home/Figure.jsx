import React from "react";
import styled from "styled-components";
import { useScrollCount } from "../../hooks";

const S = {
  Background: styled.section`
    width: 100%;
    background-color: ${(props) => props.theme.palette.background};
  `,
  Wrapper: styled.div`
    width: 100%;
    max-width: 1180px;
    margin: auto;
    padding: 100px 0;
  `,
  Label: styled.p`
    display: inline-block;
    ${(props) => props.theme.typography.label};
    color: ${(props) => props.theme.palette.primary};
    margin-bottom: 1rem;
  `,
  List: styled.ul`
    display: flex;
  `,
  ListItem: styled.li`
    width: 100%;
    padding: 0 2rem;
    text-align: center;
    &:nth-child(2) {
      border: 2px solid ${(props) => props.theme.palette.white};
      border-top: none;
      border-bottom: none;
    }
  `,
  Number: styled.span`
    ${(props) => props.theme.typography.subtitle};
    color: ${(props) => props.theme.palette.secondary};
    font-size: 3rem;
    margin-bottom: 1rem;
  `,
  Unit: styled.span`
    ${(props) => props.theme.typography.subtitle};
    color: ${(props) => props.theme.palette.secondary};
    font-size: 3rem;
    margin-bottom: 1rem;
  `,
  Title: styled.h3`
    ${(props) => props.theme.typography.subheading};
    margin: 1rem 0;
  `,
  Description: styled.p`
    ${(props) => props.theme.typography.description};
  `,
};

const FIGURE_ITEMS = [
  {
    title: "사망자 수",
    number: 24000,
    unit: "명",
    description: "최소 사망자 수",
  },
  {
    title: "난민 인원",
    number: 1000,
    unit: "만명",
    description: "최소 난민 인원",
  },
  {
    title: "재산 피해액",
    number: 5649,
    frontunit: "$",
    unit: "억",
    description: "재산 피해액",
  },
];

const Figure = () => {
  const countItem = {
    0: useScrollCount(24000),
    1: useScrollCount(1000),
    2: useScrollCount(5700),
  };

  return (
    <S.Background>
      <S.Wrapper>
        <S.List>
          {FIGURE_ITEMS.map((item, index) => (
            <S.ListItem key={item.title}>
              <S.Unit>{item.frontunit}</S.Unit>
              <S.Number {...countItem[index]}>0</S.Number>
              <S.Unit>{item.unit}</S.Unit>
              <S.Title>{item.title}</S.Title>
              <S.Description>{item.description}</S.Description>
            </S.ListItem>
          ))}
        </S.List>
      </S.Wrapper>
    </S.Background>
  );
};

export default Figure;
