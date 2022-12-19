import { Form, Input, Select } from 'antd';
import React, { FC } from 'react';
import { SearchParam } from '.';
import { UserInfo } from '../../types/user';

const SearchPanel: FC<{
  param: SearchParam;
  users: UserInfo[];
  setParam: React.Dispatch<SearchParam>;
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
        <Select
          value={param.personId}
          onChange={(value) =>
            setParam({
              ...param,
              personId: value,
            })
          }
        >
          <Select.Option value={''}>负责人</Select.Option>
          {users.map((user) => (
            <Select.Option key={user.id} value={user.id}>
              {user.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
};

export default SearchPanel;
