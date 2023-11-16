import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

function Test() {
  return (
    <Container>
      <HintContent>
        힌트는 이런 식으로 확인하시면 됩니당!!!
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
        정답 : 정답은 이런식으로 적혀있을 거에요!
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

export default Test;
