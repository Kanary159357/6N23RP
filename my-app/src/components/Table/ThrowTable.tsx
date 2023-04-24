import {
  Throw,
  punishProps,
  labelText,
  throwProps,
} from "../../types/CharacterInformation";
import TableHeader from "./TableHeader";
export default function ThrowTable({ data }: { data: Throw[] }) {
  return (
    <table className="table">
      <colgroup>
        <col width={"10%"} />
        <col width={"10%"} />
        <col width={"10%"} />
        <col width={"10%"} />
        <col width={"*"} />
      </colgroup>
      <TableHeader headers={throwProps} />
      <tbody>
        {data.map((row, i) => (
          <tr className="table-row" key={row.command}>
            <td className="table-cell">{row.command}</td>
            <td className="table-cell">{row.damage}</td>
            <td className="table-cell">{row.frame}</td>
            <td className="table-cell">{row.way}</td>
            <td className="table-cell">{row.state}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
