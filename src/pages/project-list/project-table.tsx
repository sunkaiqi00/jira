import React, { FC } from 'react';
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
          title: '负责人',
          render: (values, project) =>
            users.find((user) => user.id === project.personId)?.name || '未知',
        },
      ]}
      rowKey={(record) => record.id}
    ></Table>
  );
};

export default ProjectTable;
