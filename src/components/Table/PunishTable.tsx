import { Standing, punishProps } from "../../types/CharacterInformation";
import React from "react";
export default function StandingTable({ data }: { data: Standing[] }) {
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
            <td>{row.damage}</td>
            <td>{row.frame}</td>
            <td>{row.hitframe}</td>
            <td>{row.range}</td>
            <td>{row.state}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
