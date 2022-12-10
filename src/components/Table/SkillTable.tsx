import {
  Skill,
  punishProps,
  labelText,
  skillProps,
} from "../../types/CharacterInformation";
import TableHeader from "./TableHeader";
export default function SkillTable({ data }: { data: Skill[] }) {
  return (
    <table className="table">
      <colgroup>
        <col width={"40%"} />
        <col width={"60%"} />
      </colgroup>
      <TableHeader headers={skillProps} />
      <tbody>
        {data.map((row) => (
          <tr className="table-row" key={row.command}>
            <td className="table-cell">{row.command}</td>
            <td className="table-cell">{row.state}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
