import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

function Hint4() {
  return (
    <Container>
      <HintContent>
        금고에 있는 지도를 보고 ‘풀무학교생협'으로 가셔야 합니다! 도착했다면,
        생협 내에 있는 장치를 찾아서 탐사대원증 모양의 부위에 탐사대원증을
        올려주세요! 올려두시면 그 아래 박스가 열려서 다음 지령을 보실 수
        있습니다.
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

export default Hint4;
