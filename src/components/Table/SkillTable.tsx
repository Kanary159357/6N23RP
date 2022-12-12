import * as React from "react";
import {
  Skill,
  punishProps,
  labelText,
  skillProps,
} from "../../types/CharacterInformation";
import TableHeader from "./TableHeader";
export default function SkillTable({ data }: { data: Skill[] }) {
  const sortedData = data.map((row) => {
    return Object.fromEntries(
      Object.entries(row).sort(([k1], [k2]) =>
        skillProps.indexOf(k1) > skillProps.indexOf(k2) ? 1 : -1
      )
    );
  });
  console.log(sortedData);
  return (
    <table className="table">
      <colgroup>
        <col width={"40%"} />
        <col width={"60%"} />
      </colgroup>
      <TableHeader headers={skillProps} />
      <tbody>
        {sortedData.map((row) => (
          <TableRow row={row} key={row.command} />
        ))}
      </tbody>
    </table>
  );
}

function TableRow({ row }: { row: Record<string | "command", string> }) {
  const [rowValue, setRowValue] = React.useState(
    getInitialObjectWithEmptyString(row)
  );

  const [isEdit, setIsEdit] = React.useState(true);

  const onCellChange = (type: string) => (value: string) => {
    console.log(type, value);
    setRowValue({
      ["command"]: value,
    });
  };

  return (
    <tr className="table-row" key={row.command}>
      {Object.entries(row).map(([cellKey, cellValue]) => (
        <TableCell
          key={cellKey}
          isEdit={isEdit}
          onChange={onCellChange(cellKey)}
          cell={cellValue}
        />
      ))}
    </tr>
  );
}

function TableCell({
  isEdit,
  cell,
  onChange,
}: {
  cell: string;
  isEdit: boolean;
  onChange: (value: string) => void;
}) {
  return (
    <td>
      {isEdit ? (
        <input onChange={(e) => onChange(e.target.value)} value={cell} />
      ) : (
        <div>{cell}</div>
      )}
    </td>
  );
}

function getInitialObjectWithEmptyString(object: Record<string, string>) {
  return Object.keys(object).reduce<Record<string, string>>((acc, cur) => {
    return {
      ...acc,
      [cur]: "",
    };
  }, {});
}
