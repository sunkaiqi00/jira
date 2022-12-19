import React, { FC } from 'react';
import dayjs from 'dayjs';
import { Table } from 'antd';
import { ProjectInfo } from '../../types/project';
import { UserInfo } from '../../types/user';

const ProjectTable: FC<{ projects: ProjectInfo[]; users: UserInfo[] }> = ({
  projects,
  users,
}) => {
  return (
    <Table
      dataSource={projects}
      columns={[
        {
          title: '名称',
          dataIndex: 'name',
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: '部门',
          dataIndex: 'organization',
        },
        {
          title: '负责人',
          render: (values, project) =>
            users.find((user) => user.id === project.personId)?.name || '未知',
        },
        {
          title: '创建时间',
          render: (values, project) => (
            <span>{dayjs(project.created).format('YYYY-MM-DD HH:mm:ss')}</span>
          ),
        },
      ]}
      rowKey={(record) => record.id}
    ></Table>
  );
};

export default ProjectTable;
