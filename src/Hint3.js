import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

function Hint3() {
  return (
    <Container>
      <HintContent>
        준비물을 꼼꼼히 챙기라고 했으니, 탐사 준비물 수납장에서 ‘준비물’을
        찾아주시면 되는데요! 탐사 준비물 수납장을 보면 한글의 자음과 모음이
        있어요! ‘준비물’이니까 ‘ㅈ ㅜ ㄴ ㅂ ㅣ ㅁ ㅜ ㄹ’을 순서대로 찾아서
        수납장에 쓰여진 숫자 혹은 문자를 분홍색 금고에 순서대로 입력해주시면
        됩니다. <br />.<br />
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
        정답 : 1537295E
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

export default Hint3;
