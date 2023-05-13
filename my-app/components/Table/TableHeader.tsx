import {
  allTableColumnProps,
  labelText,
} from "../../types/CharacterInformation";
import { TableHead, TableHeader, TableRow } from "../ui/table";

export default function SkillTableHeader({
  headers,
}: {
  headers: readonly (typeof allTableColumnProps)[number][];
}) {
  return (
    <>
      <TableHeader>
        <TableRow>
          {headers.map((value) => (
            <TableHead key={value}>{labelText[value]}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
    </>
  );
}
