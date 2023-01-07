import styled from '@emotion/styled';
import { Card } from 'antd';

import logo from '../../assets/logo.svg';
import leftBg from '../../assets/left.svg';
import rightBg from '../../assets/right.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const ShadowCard = styled(Card)`
  width: 25rem;
  padding: 2rem 1rem;
  height: 30rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.header`
  background: url(${logo}) no-repeat center;
  padding: 5rem 0;
  background-size: 8rem;
  width: 100%;
`;

export const LeftBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 35%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background: url(${leftBg}) no-repeat 100% 100%;
`;
export const RightBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 35%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background: url(${rightBg}) no-repeat 100% 100%;
`;
export const Title = styled.h2`
  margin-bottom: 2.4rem;
  letter-spacing: 0.2rem;
  /* color: rgb(94, 108, 132); */
`;
