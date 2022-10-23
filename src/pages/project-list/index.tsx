import React, { useEffect, useState } from "react";
import SearchPanel from "./search-panel";
import ProjectTable from "./project-table";
import { UserInfo } from "../../types/user";
import { ProjectInfo } from "../../types/project";
import { cleanObject } from "../../utils/obj";
import qs from "qs";
import { useDebounce, useMount } from "../../hook";

const apiUrl = process.env.REACT_APP_API_URL;
export interface SearchParam {
  name: string;
  personId: number | string;
}
export default function ProjectList() {
  const [param, setParam] = useState<SearchParam>({
    name: "",
    personId: "",
  });
  const debounceParam = useDebounce<SearchParam>(param);
  const [users, setUsers] = useState<UserInfo[]>([]);
  const [projects, setProjects] = useState<ProjectInfo[]>([]);

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (res) => {
      if (res.ok) {
        setUsers((await res.json()) as UserInfo[]);
      }
    });
  });
  useEffect(() => {
    fetch(
      `${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`
    ).then(async (res) => {
      if (res.ok) {
        setProjects((await res.json()) as ProjectInfo[]);
      }
    });
  }, [debounceParam]);
  return (
    <div>
      <SearchPanel param={param} users={users} setParam={setParam} />
      <ProjectTable projects={projects} users={users} />
    </div>
  );
}
