import { Form, Input, Select } from 'antd';
import UserSelect from 'components/user-select';
import React, { FC } from 'react';
import { SearchParam } from '.';
import { UserInfo } from '../../types/user';

const SearchPanel: FC<{
  param: SearchParam;
  users: UserInfo[];
  setParam: (params: SearchParam) => void;
}> = ({ param, setParam, users }) => {
  return (
    <Form layout="inline" style={{ marginBottom: '2rem' }}>
      <Form.Item>
        <Input
          type="text"
          value={param.name}
          onChange={(e) =>
            setParam({
              ...param,
              name: e.target.value,
            })
          }
        />
      </Form.Item>
      <Form.Item>
        <UserSelect
          value={Number(param.personId)}
          options={users}
          onChange={(value) =>
            setParam({
              ...param,
              personId: value,
            })
          }
          defaultOptionName="负责人"
        />
      </Form.Item>
    </Form>
  );
};

export default SearchPanel;
