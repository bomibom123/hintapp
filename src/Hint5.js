import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

function Hint5() {
  return (
    <Container>
      <HintContent>
        건강한 빵을 함께 나눠먹는 이웃들의 모습을 상상해보라고 했으니, 그림
        조각들을 맞춰서 빵을 먹는 모습을 완성해주시면 됩니다! 장치 아래 놓아둔
        퍼즐판에 맞춰보면 쉽게 완성할 수 있을 거에요! 완성하고 나면 영어 5자리가
        보일텐데, 그 5자리로 영어 5자리 자물쇠를 열어주시면 됩니다.
        <br /> .<br />
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
        정답 : HEART (마음)
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

export default Hint5;
