import React from 'react';
import { List, Popover, Button } from 'antd';
import { useProjects } from 'pages/project-list/util';

export const ProjectPopover = () => {
  const { projects } = useProjects();
  console.log(projects);

  const content = (
    <div>
      {/* <Typography.Text type="secondary">收藏项目</Typography.Text> */}
      <List
        style={{ width: '300px' }}
        header={<div>收藏项目</div>}
        footer={<Button type="link">创建项目</Button>}
      >
        {projects
          ?.concat(...projects)
          ?.filter((pro) => pro.pin)
          .map((item) => (
            <List.Item>{item.name}</List.Item>
          ))}
      </List>
    </div>
  );
  return (
    <Popover placement="bottom" content={content}>
      项目
    </Popover>
  );
};
