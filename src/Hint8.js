import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

function Hint8() {
  return (
    <Container>
      <HintContent>
        책을 읽고 열심히 공부하는 아이들을 보라고 했으니, 건물 속 창문 중 책을
        읽고 있는 아이가 있는 칸을 파악해주시면 됩니다! 건물의 창 8개를 8칸
        자물쇠로 생각해볼 때, 밝은 조명 속 책 읽는 아이들이 있는 칸을 눌러서
        자물쇠를 열어주시면 됩니다.
        <br />.<br />
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
        정답 : 1,2,5,7
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

export default Hint8;
