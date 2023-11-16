import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

function Hint7() {
  return (
    <Container>
      <HintContent>
        밝맑도서관 1층 화장실 앞 쪽을 보면 모금함과 색색깔의 시, 여러 책자들이
        놓여져있는 책상이 있는데요! 그 앞을 보면 상자 속의 시가 유리 뒤에 크게
        붙어있습니다. (색색깔의 시 중에도 있어요!) 구멍이 뚫린 부분에 해당하는
        글자들을 조합해보면 세자리 숫자를 알 수 있어요! <br />.<br />
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
        정답 : 이 하나 오 -> 215
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
  margin: 20px;
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

export default Hint7;
