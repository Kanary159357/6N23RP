import {
  labelText,
  Punish,
  punishProps,
} from "../../types/CharacterInformation";
import TableHeader from "./TableHeader";
export default function PunishTable({ data }: { data: Punish[] }) {
  return (
    <>
      <table className="table">
        <colgroup>
          <col width={"10%"} />
          <col width={"10%"} />
          <col width={"10%"} />
          <col width={"10%"} />
          <col width={"10%"} />
          <col width={"*"} />
        </colgroup>
        <TableHeader headers={punishProps} />

        <tbody>
          {data.map((row) => (
            <tr className="table-row" key={row.command}>
              <td className="table-cell">{row.command}</td>
              <td className="table-cell">{row.damage}</td>
              <td className="table-cell">{row.frame}</td>
              <td className="table-cell">{row.hitframe}</td>
              <td className="table-cell">{row.range}</td>
              <td className="table-cell">{row.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
