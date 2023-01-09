import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { Table, TableProps } from 'antd';

import { ProjectInfo } from 'types/project';
import { UserInfo } from 'types/user';
import Pin from 'components/pin';
import { useEditProject } from './util';

interface ProjectTableProps extends TableProps<ProjectInfo> {
  users: UserInfo[];
  refresh: () => void;
}

const ProjectTable: FC<ProjectTableProps> = ({ users, refresh, ...props }) => {
  const { edit } = useEditProject();
  const editProject = (id: number) => (pin: boolean) =>
    edit({ id, pin }).then(refresh);
  return (
    <Table
      columns={[
        {
          title: <Pin checked={true} disabled={true} />,
          render: (_, project) => (
            <Pin checked={project.pin} onChecked={editProject(project.id)} />
          ),
        },
        {
          title: '名称',
          render: (values, project) => (
            <Link to={String(project.id)}>{project.name}</Link>
          ),
          // dataIndex: 'name',
          // sorter: (a, b) => a.name.localeCompare(b.name),
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
      {...props}
    />
  );
};

export default ProjectTable;
