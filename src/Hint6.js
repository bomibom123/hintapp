import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

function Hint6() {
  return (
    <Container>
      <HintContent>
        박스 안 쪽을 보면 빵 메뉴가 적힌 표가 보이실텐데요! 출발부터 도착까지,
        지령에 적힌 6개의 빵을 따라가며 그 방향을 방향 자물쇠에 입력해주시면
        됩니다! <br />.<br />
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
        정답 : 오른쪽, 아래쪽, 오른쪽, 아래쪽, 오른쪽
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
  background-color: #0e0e0e;
  color: white;
  margin: 20px;
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

export default Hint6;
