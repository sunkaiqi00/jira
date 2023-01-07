import styled from '@emotion/styled';
import { Spin, Typography } from 'antd';

export const Row = styled.div<{
  gap?: number | boolean;
  between?: boolean;
  marginBottom?: number;
}>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.between ? 'space-between' : undefined)};
  margin-bottom: ${(props) =>
    typeof props.marginBottom !== 'undefined'
      ? props.marginBottom + 'rem'
      : undefined};

  > * {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    margin-right: ${(props) =>
      typeof props.gap === 'number'
        ? props.gap + 'rem'
        : props.gap
        ? '2rem'
        : undefined};
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-rows: 4rem 1fr;
  height: 100vh;
`;

export const FullPageScreen = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FullPageLoading = () => (
  <FullPageScreen>
    <Spin size="large" />
  </FullPageScreen>
);

export const FullPageError = ({ error }: { error: Error | null }) => (
  <FullPageScreen>
    <Typography.Text type="danger">{error?.message}</Typography.Text>
  </FullPageScreen>
);
