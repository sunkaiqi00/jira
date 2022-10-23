import React, { FC } from "react";
import { SearchParam } from ".";
import { UserInfo } from "../../types/user";

const SearchPanel: FC<{
  param: SearchParam;
  users: UserInfo[];
  setParam: React.Dispatch<SearchParam>;
}> = ({ param, setParam, users }) => {
  return (
    <div>
      <input
        type="text"
        value={param.name}
        onChange={(evt) =>
          setParam({
            ...param,
            name: evt.target.value,
          })
        }
      />
      <select
        value={param.personId}
        onChange={(evt) =>
          setParam({
            ...param,
            personId: evt.target.value,
          })
        }
      >
        <option value={""}>负责人</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchPanel;
