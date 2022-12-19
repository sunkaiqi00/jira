import styled from '@emotion/styled';
import { Row } from '../lib';

// grid-area 用来给grid子元素起名字
export const Header = styled(Row)`
  padding: 0 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;
export const HeaderLeft = styled(Row)``;
export const HeaderRight = styled.div``;
export const Main = styled.main`
  display: flex;
  overflow: hidden;
`;
