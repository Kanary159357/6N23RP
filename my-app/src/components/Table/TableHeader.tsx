import {
  allTableColumnProps,
  labelText,
} from "../../types/CharacterInformation";

export default function TableHeader({
  headers,
}: {
  headers: readonly typeof allTableColumnProps[number][];
}) {
  return (
    <>
      <thead>
        <tr className="table-row">
          {headers.map((value) => (
            <th className="table-cell" key={value}>
              {labelText[value]}
            </th>
          ))}
        </tr>
      </thead>
    </>
  );
}
