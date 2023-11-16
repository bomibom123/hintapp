import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

function Hint2() {
  return (
    <Container>
      <HintContent>
        모험심과 용기 테스트이고 밑바닥까지 손을 넣으라고 되어있어요! 흰색
        물음표가 그려진 검은 상자에 손을 넣어서, 밑바닥에 있는 숫자를 읽어주시면
        됩니다. 바로 옆의 검은 상자에 있는 금색 자물쇠를 풀기 위해 숫자 세
        자리를 손의 감각으로 읽어주시면 돼요! <br />.<br />
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
        정답 : 316
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

export default Hint2;
