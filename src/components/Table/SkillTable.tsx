import { Skill, punishProps } from "../../types/CharacterInformation";
import React from "react";
export default function SkillTable({ data }: { data: Skill[] }) {
  const tableHeaders = punishProps;

  return (
    <table>
      <thead>
        {tableHeaders.map((value) => (
          <tr>
            <th>{value}</th>
          </tr>
        ))}
      </thead>
      <tbody>
        {data.map((row) => (
          <tr>
            <td>{row.command}</td>
            <td>{row.state}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
