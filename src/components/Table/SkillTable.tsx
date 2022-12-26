import * as React from "react";
import { Skill, skillProps } from "../../types/CharacterInformation";
import TableHeader from "./TableHeader";
import { sortCharacterRow } from "../../utils/sortCharacterRow";
import Textarea from "../Textarea";
export default function SkillTable({ data }: { data: Skill[] }) {
  const sortedData = data.map((row) => sortCharacterRow(row, skillProps));
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
  const [editableRow, setEditableRow] = React.useState(row);
  const [isEdit, setIsEdit] = React.useState(true);

  const onCellChange = (type: string) => (value: string) => {
    setEditableRow({
      ...row,
      [type]: value,
    });
  };

  return (
    <tr className="table-row" key={row.command}>
      {Object.entries(editableRow).map(([cellKey, cellValue]) => (
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
    <td className="table-cell">
      {isEdit ? (
        <div className="flex">
          <Textarea className="box-border flex-1" onTextChange={onChange} value={cell} />
        </div>
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
