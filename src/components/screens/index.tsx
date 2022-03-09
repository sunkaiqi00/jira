import React, { useCallback, useEffect, useState } from "react";
import * as qs from "qs";

import List from "./List";
import SearchPanel from "./ScreenPanel";

import { clearObject } from "../../utils";
import useDebounce from "../../hooks/useDebounce";
import useMount from "hooks/useMount";

export interface SearchParam {
  name: string;
  personId: string;
  [propsName: string]: unknown;
}

// const data: SearchParam = {
//   name: 'aa',
//   personId: '1',
//   address: 'china'
// }

export interface UserParam {
  id: number;
  name: string;
}

export interface ListParam {
  id: number;
  name: string;
  personId: number;
}

console.log(process.env);

const apiUrl = process.env.REACT_APP_API_URL;

const ScreensProject = () => {
  const [param, setParam] = useState<SearchParam>({
    name: "",
    personId: "",
  });
  const debounceParam = useDebounce(param);
  const [users, setUsers] = useState<UserParam[]>([]);
  const [list, setList] = useState<ListParam[]>([]);

  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(clearObject(param))}`).then(
      async (response) => {
        if (response.ok) {
          setList(await response.json());
        }
      }
    );
  }, [debounceParam]);

  const fetchUsers = useCallback(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  }, []);

  useMount(fetchUsers);

  return (
    <div>
      <SearchPanel param={param} users={users} setParam={setParam} />
      <List list={list} users={users} />
    </div>
  );
};

export default ScreensProject;
