import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

function Hint1() {
  return (
    <Container>
      <HintContent>
        지령의 빨간 글씨를 보면 가방을 열어보라고 되어있어요! 먼저 가방을 열어야
        하는데, 그러기 위해서는 가방에 있는 5자리 영어 자물쇠를 풀어야합니다.
        지령 아래에 5개의 그림과 화살표가 보이시죠? 그림에 해당하는 가구나
        가전제품을 찾아서 화살표 방향을 보면 알파벳을 찾을 수 있습니당~ 예를
        들어 세 번째 그림의 경우 에어컨을 나타내고 화살표가 오른쪽을 가리키고
        있으니 에어컨의 오른쪽을 보면 알파벳 A를 찾을 수 있습니다! 그런 식으로
        5자리 알파벳을 알아내 순서대로 자물쇠에 입력해 가방을 열어주세요! <br />
        .
        <br />
        .<br />
        .<br />
        .<br />
        .<br />
        .<br />
        .<br />
        .<br />
        .<br />
        .<br />
        .<br />
        .<br />
        .<br />
        .<br />
        첫 번째는 그 모양의 회색 가구, 두 번째는 짙은 회색 세로형 냉장고, 세
        번째는 에어컨, 네 번째는 입구 근처의 양쪽으로 여는 나무장, 다섯 번째는
        칠판을 의미해요!
        <br />
        정답 : START
      </HintContent>
      <BackButton>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          처음으로
          <br />
          돌아가기
        </Link>
      </BackButton>
    </Container>
  );
}

const HintContent = styled.div`
  max-width: 100vw;
  margin: 20px;
  background-color: #0e0e0e;
  color: white;
`;
const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  background-color: #0e0e0e;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;

const BackButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: white;
  margin: 20px;
`;

export default Hint1;
