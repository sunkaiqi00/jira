import React from 'react';
import { Button, Dropdown, MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';

import { useAuth } from 'context/auth-context';

import { Header, HeaderLeft, HeaderRight } from './styled';
import { ReactComponent as SoftWareLogo } from '../../assets/software-logo.svg';
import { ProjectPopover } from 'components/project';

const PageHeader = () => {
  const navigate = useNavigate();

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
        <Button
          type="link"
          onClick={() => {
            navigate('/');
          }}
          style={{ padding: '0 15px' }}
        >
          <SoftWareLogo width="12rem" color="rgb(38, 132, 255)" />
        </Button>
        {/* <h3>项目</h3> */}
        <ProjectPopover />
        <h3>用户</h3>
      </HeaderLeft>
      <HeaderRight>
        <Dropdown
          menu={{
            items: dropMenus,
            onClick: (key) => {
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
