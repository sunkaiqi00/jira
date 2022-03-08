import { FC, useEffect, useState } from "react";

import { SearchParam, UserParam } from "./";

interface SearchPanelProps {
  param: SearchParam;
  setParam: (value: SearchParam) => void;
  users: UserParam[];
}

const SearchPanel: FC<SearchPanelProps> = (props) => {
  const { param, users, setParam } = props;
  return (
    <form>
      <input
        type="text"
        value={param.name}
        onChange={(evt) => setParam({ ...param, name: evt.target.value })}
      />
      <select
        value={param.personId}
        onChange={(evt) => setParam({ ...param, personId: evt.target.value })}
      >
        <option value="">负责人</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </form>
  );
};

export default SearchPanel;
