import * as React from "react";
import { Skill, skillProps } from "../../types/CharacterInformation";
import TableHeader from "./TableHeader";
import { sortCharacterRow } from "../../lib/sortCharacterRow";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import { useState } from "react";
import { Textarea } from "../ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { MoreHorizontalIcon, Pen, Save, Trash, XCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import {
  DialogPortal,
  DialogOverlay,
  DialogClose,
} from "@radix-ui/react-dialog";
export default function SkillTable({ data }: { data: Skill[] }) {
  const sortedData = data.map((row) => sortCharacterRow(row, skillProps));
  return (
    <Table>
      <colgroup>
        <col width={"40%"} />
        <col width={"60%"} />
        <col width={"130px"} />
      </colgroup>
      <TableHeader headers={skillProps} />
      <TableBody>
        {sortedData.map((row) => (
          <SkillTableRow row={row} key={row.command} />
        ))}
      </TableBody>
    </Table>
  );
}

function SkillTableRow({ row }: { row: Record<string | "command", string> }) {
  const [isEditable, setEditable] = useState(false);
  const ref = React.useRef<HTMLTextAreaElement[]>([]);

  return (
    <TableRow className="table-row" key={row.command}>
      {Object.entries(row).map(([cellKey, cellValue], i) => {
        return isEditable ? (
          <TableCell key={cellKey} className={`table-cell`}>
            <Textarea
              defaultValue={cellValue}
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
      <TableCell>
        <RowDropdownMenu isEditable={isEditable} onChangeClick={setEditable} />
      </TableCell>
    </TableRow>
  );
}

function RowDropdownMenu({
  isEditable,
  onChangeClick,
}: {
  isEditable: boolean;
  onChangeClick: (value: boolean) => void;
}) {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger>
        <MoreHorizontalIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {isEditable ? (
          <>
            <DropdownMenuItem>
              <Save className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
              저장
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onChangeClick(false)}>
              <XCircle className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
              취소
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem onClick={() => onChangeClick(true)}>
              <Pen className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
              수정
            </DropdownMenuItem>
            <DialogItem
              triggerChildren={
                <>
                  <Trash className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                  삭제
                </>
              }
            >
              <DialogHeader>
                <DialogTitle>행 삭제</DialogTitle>
                <DialogDescription>
                  정말로 해당 내용을 삭제하시겠습니까?
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button>취소</Button>
                <Button type="submit">삭제</Button>
              </DialogFooter>
            </DialogItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// eslint-disable-next-line react/display-name
const DialogItem = React.forwardRef<
  _,
  {
    children: React.ReactNode;
    triggerChildren: React.ReactNode;
    onSelect?: () => void;
    onOpenChange?: () => void;
  }
>((props, forwardedRef) => {
  const { triggerChildren, children, onSelect, onOpenChange, ...itemProps } =
    props;
  return (
    <Dialog onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <DropdownMenuItem
          {...itemProps}
          ref={forwardedRef}
          className="DropdownMenuItem"
          onSelect={(event: { preventDefault: () => void }) => {
            event.preventDefault();
            onSelect && onSelect();
          }}
        >
          {triggerChildren}
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="DialogOverlay" />
        <DialogContent className="DialogContent sm:max-w-[425px]">
          {children}
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
});
