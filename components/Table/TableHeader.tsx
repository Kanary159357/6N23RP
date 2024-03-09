import {
  allTableColumnProps,
  labelText,
} from "../../types/CharacterInformation";
import {
  TableHead,
  TableHeader as BaseTableHeader,
  TableRow,
} from "../ui/table";

export default function TableHeader({
  headers,
}: {
  headers: readonly (typeof allTableColumnProps)[number][];
}) {
  return (
    <>
      <BaseTableHeader>
        <TableRow>
          {headers.map((value) => (
            <TableHead key={value}>{labelText[value]}</TableHead>
          ))}
        </TableRow>
      </BaseTableHeader>
    </>
  );
}
