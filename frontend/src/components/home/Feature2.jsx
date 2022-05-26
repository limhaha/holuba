import React from "react";
import styled from "styled-components";
import { image1, image2, image3 } from "../../assets";
import HomeButton from "./HomeButton";
import { useScrollFadeIn } from "../../hooks";

const S = {
  Wrapper: styled.div`
    width: 100%;
    max-width: 1180px;
    margin: auto;
    padding: 120px 0;
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
    margin-bottom: 1rem;
  `,
  Description: styled.p`
    ${(props) => props.theme.typography.description};
    color: ${(props) => props.theme.palette.black};
    margin-bottom: 4rem;
  `,
  List: styled.ul`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 4rem;
  `,
  ListItem: styled.li`
    width: 380px;
    box-shadow: 0 0 16px 8px rgba(0, 0, 0, 0.03);
    border-radius: 0.5rem;
  `,
  ItemImage: styled.div`
    width: 100%;
    height: 250px;
    border-radius: 0.5rem 0.5rem 0 0;
    background: no-repeat center/cover url(${(props) => props.image});
  `,
  TextContainer: styled.div`
    padding: 2rem;
  `,
  ItemTitle: styled.h3`
    ${(props) => props.theme.typography.heading};
    color: ${(props) => props.theme.palette.black};
    margin-bottom: 0.75rem;
    text-align: center;
  `,
  ItemLabel: styled.p`
    ${(props) => props.theme.typography.caption};
    color: ${(props) => props.theme.palette.gray};
    font-weight: 400;
    margin-bottom: 1.5rem;
  `,
  ItemDesciption: styled.p`
    ${(props) => props.theme.typography.description};
    margin-bottom: 1.5rem;
  `,
  TextButton: styled.button`
    width: fit-content;
    padding: 0;
    ${(props) => props.theme.typography.textbutton};
    color: ${(props) => props.theme.palette.secondary};
    cursor: pointer;
  `,
};

const WORKS_ITEMS = [
  {
    image: image3,
    title: "투명한 거래가 보장됩니다.",
    label: "Apr 5th, 2022",
    description: "Cotent1",
  },
  {
    image: image2,
    title: "익명이 보장됩니다.",
    label: "Apr 6th, 2022",
    description: "Cotent2",
  },
  {
    image: image1,
    title: "신뢰할 수 있습니다.",
    label: "Apr 7th, 2022",
    description: "Cotent3",
  },
];

const Works = () => {
  const animatedItem = {
    0: useScrollFadeIn("left", 1),
    1: useScrollFadeIn("left", 1, 0.2),
    2: useScrollFadeIn("left", 1, 0.4),
  };

  return (
    <S.Wrapper>
      <S.Label>More feature</S.Label>
      <S.Title> </S.Title>
      <S.Description> </S.Description>
      <S.List>
        {WORKS_ITEMS.map((item, index) => (
          <S.ListItem key={item.title} {...animatedItem[index]}>
            <S.ItemImage image={item.image} />
            <S.TextContainer>
              <S.ItemTitle>{item.title}</S.ItemTitle>
              {/* <S.ItemLabel>{item.label}</S.ItemLabel> */}
              {/* <S.ItemDesciption>{item.description}</S.ItemDesciption> */}
              {/* <S.TextButton>Read more</S.TextButton> */}
            </S.TextContainer>
          </S.ListItem>
        ))}
      </S.List>
      {/* <HomeButton fill="outline">View More</HomeButton> */}
    </S.Wrapper>
  );
};

export default Works;
