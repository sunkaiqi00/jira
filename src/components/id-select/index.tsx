import React, { FC } from 'react';
import { Select } from 'antd';

/**
 * value 可以传入多种类型
 * onChange 只会回调 number|undefined 类型
 * 当 isNaN(Number(value)) 为true时 代表选择默认类型
 * 当选择了默认类型, onChange会回调undefined
 */

type SelectCompProps = React.ComponentProps<typeof Select>;

interface IdSelectProps
  extends Omit<SelectCompProps, 'value' | 'onChange' | 'options'> {
  value: number | string | null | undefined;
  onChange: (value: number | undefined) => void;
  defaultOptionName?: string;
  options: { name: string; id: number }[];
}

const toNumber = (value: any) => (isNaN(Number(value)) ? 0 : Number(value));

const IdSelect: FC<IdSelectProps> = ({
  value,
  onChange,
  defaultOptionName,
  options,
}) => {
  return (
    <Select
      value={options.length ? toNumber(value) : 0}
      onChange={(value) => onChange(toNumber(value) || undefined)}
    >
      {defaultOptionName ? (
        <Select.Option value={0}>{defaultOptionName}</Select.Option>
      ) : null}
      {options.map((item) => (
        <Select.Option key={item.id} value={item.id}>
          {item.name}
        </Select.Option>
      ))}
    </Select>
  );
};

export default IdSelect;
