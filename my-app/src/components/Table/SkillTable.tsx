import * as React from "react";
import {
  CharacterInformation,
  Skill,
  skillProps,
} from "../../types/CharacterInformation";
import TableHeader from "./TableHeader";
import { sortCharacterRow } from "../../utils/sortCharacterRow";
import Textarea from "../Textarea";
import Button from "../Button";
import { openDeleteCheckModal } from "../Modal/store";
import Popup from "../Popup";
export default function SkillTable({
  data,
  columnType,
}: {
  data: Skill[];
  columnType: keyof CharacterInformation;
}) {
  const sortedData = data.map((row) => sortCharacterRow(row, skillProps));
  return (
    <table className="table">
      <colgroup>
        <col width={"40%"} />
        <col width={"60%"} />
        <col width={"130px"} />
      </colgroup>
      <TableHeader headers={skillProps} />
      <tbody>
        {sortedData.map((row) => (
          <TableRow row={row} key={row.command} columnType={columnType} />
        ))}
      </tbody>
    </table>
  );
}

function TableRow({
  row,
  columnType,
}: {
  row: Record<string | "command", string>;
  columnType: keyof CharacterInformation;
}) {
  const [editableRow, setEditableRow] = React.useState(row);
  const [isEdit, setIsEdit] = React.useState(false);

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
      <td className="table-cell">
        {isEdit ? (
          <div className="flex gap-6px">
            <Button className="break-keep text-xs bg-black_1 text-white_1">
              적용
            </Button>
            <Button
              className="break-keep text-xs border-1"
              onClick={() => {
                setEditableRow(row);
                setIsEdit(false);
              }}
            >
              취소
            </Button>
          </div>
        ) : (
          <Popup
            trigger={
              <div className="m-l-auto cursor-pointer i-gg-more-vertical-alt" />
            }
            contents={[
              { text: "수정", onClick: () => console.log("hi") },
              {
                text: "삭제",
                onClick: () => openDeleteCheckModal({ row, columnType }),
              },
            ]}
          />
        )}
      </td>
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
    <td className={`table-cell`}>
      {isEdit ? (
        <div className="flex">
          <Textarea
            className="box-border flex-1"
            onTextChange={onChange}
            value={cell}
          />
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
