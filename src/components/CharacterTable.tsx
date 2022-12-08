import React from "react";

export default function CharacterTable<T extends string>({
  data,
}: {
  data: Record<T, string>[];
}) {
  const tableHeaders = T;
  const tableContent = data;
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
            {Object.values(row).map((item) => (
              <td>{item}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
