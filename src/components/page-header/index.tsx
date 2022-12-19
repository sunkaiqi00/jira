import React from 'react';

import { Button, Dropdown, MenuProps } from 'antd';

import { Header, HeaderLeft, HeaderRight } from './styled';

import { ReactComponent as SoftWareLogo } from '../../assets/software-logo.svg';
import { useAuth } from 'context/auth-context';

const PageHeader = () => {
  const { logout, user } = useAuth();

  const dropMenus: MenuProps['items'] = [
    {
      label: '退出',
      key: 'logout',
    },
  ];
  return (
    <Header between={true}>
      <HeaderLeft gap={true}>
        <Button type="link" onClick={() => {}} style={{ padding: '0 15px' }}>
          <SoftWareLogo width="12rem" color="rgb(38, 132, 255)" />
        </Button>
        <h3>项目</h3>
        <h3>用户</h3>
      </HeaderLeft>
      <HeaderRight>
        <Dropdown
          menu={{
            items: dropMenus,
            onClick: (key) => {
              console.log(key);
              logout();
            },
          }}
        >
          <Button type="link" onClick={(e) => e.preventDefault()}>
            Hi，{user?.name}
          </Button>
        </Dropdown>
      </HeaderRight>
    </Header>
  );
};
export default PageHeader;
