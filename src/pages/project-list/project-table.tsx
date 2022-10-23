import React, { FC } from "react";
import { ProjectInfo } from "../../types/project";
import { UserInfo } from "../../types/user";

const ProjectTable: FC<{ projects: ProjectInfo[]; users: UserInfo[] }> = ({
  projects,
  users,
}) => {
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>
              {users.find((user) => user.id === project.personId)?.name ||
                "未知"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProjectTable;
