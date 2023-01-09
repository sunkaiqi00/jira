import { Rate, RateProps } from 'antd';
import React, { FC } from 'react';

interface PinProps extends Omit<RateProps, 'value' | 'onChange' | 'count'> {
  checked: boolean;
  onChecked?: (check: boolean) => void;
}

const Pin: FC<PinProps> = ({ checked, onChecked, ...resetProps }) => {
  return (
    <Rate
      count={1}
      value={Number(checked)}
      onChange={(value) => onChecked?.(!!value)}
      {...resetProps}
    />
  );
};

export default Pin;
