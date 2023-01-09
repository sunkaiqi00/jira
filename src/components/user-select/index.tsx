import React, { FC, ComponentProps } from 'react';

import IdSelect from 'components/id-select';

const UserSelect: FC<ComponentProps<typeof IdSelect>> = (props) => {
  return <IdSelect {...props} />;
};

export default UserSelect;
