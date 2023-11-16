import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

import poster from './assets/poster.jpg';

function Lending() {
  return (
    <Container>
      <Poster src={poster} alt="방탈출 게임 포스터"></Poster>
      <BigTitle>방탈출 힌트 보기</BigTitle>
      <HintButtonBox>
        <HintButton>
          <Link to="/Hint1" style={{ textDecoration: 'none', color: 'black' }}>
            지령1
          </Link>
        </HintButton>
        <HintButton>
          {' '}
          <Link to="/Hint2" style={{ textDecoration: 'none', color: 'black' }}>
            지령2
          </Link>
        </HintButton>
      </HintButtonBox>
      <HintButtonBox>
        <HintButton>
          {' '}
          <Link to="/Hint3" style={{ textDecoration: 'none', color: 'black' }}>
            지령3
          </Link>
        </HintButton>
        <HintButton>
          {' '}
          <Link to="/Hint4" style={{ textDecoration: 'none', color: 'black' }}>
            지령4
          </Link>
        </HintButton>
      </HintButtonBox>
      <HintButtonBox>
        <HintButton>
          {' '}
          <Link to="/Hint5" style={{ textDecoration: 'none', color: 'black' }}>
            지령5
          </Link>
        </HintButton>
        <HintButton>
          {' '}
          <Link to="/Hint6" style={{ textDecoration: 'none', color: 'black' }}>
            지령6
          </Link>
        </HintButton>
      </HintButtonBox>
      <HintButtonBox>
        <HintButton>
          {' '}
          <Link to="/Hint7" style={{ textDecoration: 'none', color: 'black' }}>
            지령7
          </Link>
        </HintButton>
        <HintButton>
          {' '}
          <Link to="/Hint8" style={{ textDecoration: 'none', color: 'black' }}>
            지령8
          </Link>
        </HintButton>
      </HintButtonBox>
      <HintButtonBox>
        <HintButton>
          {' '}
          <Link to="/Hint9" style={{ textDecoration: 'none', color: 'black' }}>
            지령9
          </Link>
        </HintButton>
        <HintButton>
          {' '}
          <Link to="/Hint10" style={{ textDecoration: 'none', color: 'black' }}>
            지령10
          </Link>
        </HintButton>
      </HintButtonBox>
      <HintButtonBox>
        <HintButton>
          {' '}
          <Link to="/Test" style={{ textDecoration: 'none', color: 'black' }}>
            TEST
          </Link>
        </HintButton>
      </HintButtonBox>
    </Container>
  );
}

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

const BigTitle = styled.div`
  color: white;
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 30px;
`;

const Poster = styled.img`
  width: 100vw;
  height: 130vh;
  margin-top: 30px;
  margin-bottom: 30px;
  @media (min-width: 380px) {
    width: 350px;
    height: 494px;
  }
`;

const HintButtonBox = styled.div`
  max-width: 100vw;
  background-color: #0e0e0e;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;

const HintButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: white;
  margin: 20px;
`;

export default Lending;
