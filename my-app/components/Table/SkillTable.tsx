import * as React from "react";
import {
  CharacterInformation,
  Skill,
  skillProps,
} from "../../types/CharacterInformation";
import TableHeader from "./TableHeader";
import { sortCharacterRow } from "../../utils/sortCharacterRow";
import Button from "../Button";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import { useState } from "react";
import { Textarea } from "../ui/textarea";
export default function SkillTable({
  data,
  columnType,
}: {
  data: Skill[];
  columnType: keyof CharacterInformation;
}) {
  const sortedData = data.map((row) => sortCharacterRow(row, skillProps));
  return (
    <Table className="table">
      <colgroup>
        <col width={"40%"} />
        <col width={"60%"} />
        <col width={"130px"} />
      </colgroup>
      <TableHeader headers={skillProps} />
      <TableBody>
        {sortedData.map((row) => (
          <SkillTableRow row={row} key={row.command} columnType={columnType} />
        ))}
      </TableBody>
    </Table>
  );
}

function SkillTableRow({
  row,
  columnType,
}: {
  row: Record<string | "command", string>;
  columnType: keyof CharacterInformation;
}) {
  const [isEditable, setEditable] = useState(false);
  const ref = React.useRef<HTMLTextAreaElement[]>([]);

  return (
    <TableRow className="table-row" key={row.command}>
      {Object.entries(row).map(([cellKey, cellValue], i) => {
        return isEditable ? (
          <TableCell key={cellKey} className={`table-cell`}>
            <Textarea
              ref={(el) => {
                if (el) ref.current[i] = el;
              }}
            />
          </TableCell>
        ) : (
          <TableCell key={cellKey} className={`table-cell`}>
            {cellValue}
          </TableCell>
        );
      })}
    </TableRow>
  );
}
