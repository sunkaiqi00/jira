import React from 'react';
import { Button, Drawer } from 'antd';

export function ProjectModal({
  open,
  close,
}: {
  open: boolean;
  close: () => void;
}) {
  return (
    <Drawer title="创建项目" open={open} onClose={close}>
      <Button onClick={close}>关闭</Button>
    </Drawer>
  );
}
