import React from "react";
import styled from "styled-components";
import { blockchain } from "../../assets";
import { useScrollClipPath } from "../../hooks";

const S = {
  Wrapper: styled.section`
    width: 100%;
    max-width: 1180px;
    margin: auto;
    padding: 120px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  TextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 580px;
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
  List: styled.ul`
    width: fit-content;
    margin-bottom: 2rem;
  `,
  ListItem: styled.p`
    ${(props) => props.theme.typography.description};
    padding: 1rem 1rem 1rem 0;
    border-bottom: 1px solid ${(props) => props.theme.palette.lightgray};
    span {
      color: ${(props) => props.theme.palette.secondary};
    }
  `,
  TextButton: styled.button`
    width: fit-content;
    ${(props) => props.theme.typography.textbutton};
    color: ${(props) => props.theme.palette.secondary};
    cursor: pointer;
  `,
  Image: styled.div`
    width: 650px;
    height: 400px;
    background: no-repeat center/cover url(${blockchain});
  `,
};

const FEAURE_ITEMS = [
  "모든과정을 블록체인에 기록해 투명성과 신뢰성을 보장합니다.",
  "큰 금액이 아닌 작은 금액부터 부담없이 기부 가능합니다.",
  "익명성 보장, 하지만 기부증서인 토큰은 당신에게 남게됩니다.",
];

const Feature = () => {
  const animatedImage = useScrollClipPath();

  return (
    <S.Wrapper>
      <S.TextWrapper>
        <S.Label>Our Features</S.Label>
        <S.Title>스마트컨트랙트 기반의 기부</S.Title>
        <S.Description>
          기부자가 NFT를 획득한 순간부터 판매대금이 기부 대상자에 전달되는
          과정까지 모두 기록되고, 누구나 볼 수 있도록 오픈됩니다.
        </S.Description>
        <S.List>
          {FEAURE_ITEMS.map((item, index) => (
            <S.ListItem key={item}>
              <span>•</span> {item}
            </S.ListItem>
          ))}
        </S.List>
        <S.TextButton>더 알아보기</S.TextButton>
      </S.TextWrapper>
      <S.Image {...animatedImage} />
    </S.Wrapper>
  );
};

export default Feature;
