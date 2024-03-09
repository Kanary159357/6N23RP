import * as React from "react";
import { Skill, skillProps } from "../../types/CharacterInformation";
import TableHeader from "./TableHeader";
import { sortCharacterRow } from "../../lib/sortCharacterRow";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableRow,
} from "../ui/table";
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
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
import { V7CharNamesType } from "@/constants/characterName";
import { usePathname, useRouter } from "next/navigation";
import { useGetCharacterNameByPath } from "@/hooks/useGetCharacterNameByPath";
import { DialogItem } from "../ui/dialogItem";
import { updateCharacterRow } from "@/lib/api";
export default function SkillTable({
  tableType,
  data,
}: {
  tableType: string;
  data: Skill[];
}) {
  const sortedData = data.map((row) => sortCharacterRow(row, skillProps));

  const [isAdd, setIsAdd] = useState(false);
  const ref = React.useRef<Record<string, HTMLTextAreaElement>>({});
  const router = useRouter();
  const characterName = useGetCharacterNameByPath();

  const addRow = async () => {
    await fetch("/api/v7/char", {
      method: "POST",
      body: JSON.stringify({
        row: Object.fromEntries(
          Object.entries(ref.current).map(([k, v]) => {
            return [k, v.value];
          })
        ),
        characterName,
        columnType: tableType,
      }),
    });
    router.refresh();
  };

  return (
    <>
      <Table>
        <colgroup>
          <col width={"40%"} />
          <col width={"60%"} />
          <col width={"130px"} />
        </colgroup>
        <TableHeader headers={skillProps} />
        <TableBody>
          {sortedData.map((row) => (
            <SkillTableRow tableType={tableType} row={row} key={row.command} />
          ))}
          {isAdd && (
            <TableRow>
              {skillProps.map((v) => (
                <TableCell key={v} className={`table-cell`}>
                  <Textarea
                    ref={(el) => {
                      if (el) ref.current[v] = el;
                      return;
                    }}
                  />
                </TableCell>
              ))}
              <TableCell>
                <RowDropdownMenu
                  isEditable={isAdd}
                  onChangeClick={setIsAdd}
                  saveRow={addRow}
                />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {!isAdd && (
        <div className="flex mb-[20px]">
          <Button className="ml-auto" onClick={() => setIsAdd(true)}>
            추가하기
          </Button>
        </div>
      )}
    </>
  );
}

function SkillTableRow({
  row,
  tableType,
}: {
  tableType: string;
  row: Record<string | "command", string>;
}) {
  const [isEditable, setEditable] = useState(false);
  const ref = React.useRef<Record<string, HTMLTextAreaElement>>({});
  const characterName = useGetCharacterNameByPath();
  const router = useRouter();
  const saveRow = async () => {
    await updateCharacterRow({
      oldRow: row,
      newRow: Object.fromEntries(
        Object.entries(ref.current).map(([k, v]) => {
          return [k, v.value];
        })
      ),
      characterName,
      columnType: tableType,
    });
    router.refresh();
  };

  const deleteRow = async () => {
    await updateCharacterRow({
      oldRow: row,
      newRow: {},
      characterName,
      columnType: tableType,
    });

    router.refresh();
  };
  return (
    <TableRow className="table-row" key={row.command}>
      {Object.entries(row).map(([cellKey, cellValue]) => {
        return isEditable ? (
          <TableCell key={cellKey} className={`table-cell`}>
            <Textarea
              defaultValue={cellValue}
              ref={(el) => {
                if (el) ref.current[cellKey] = el;
                return;
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
        <RowDropdownMenu
          isEditable={isEditable}
          onChangeClick={setEditable}
          saveRow={saveRow}
          deleteRow={deleteRow}
        />
      </TableCell>
    </TableRow>
  );
}

function RowDropdownMenu({
  isEditable,
  onChangeClick,
  saveRow,
  deleteRow,
}: {
  isEditable: boolean;
  onChangeClick: (value: boolean) => void;
  saveRow: () => void;
  deleteRow?: () => void;
}) {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [hasOpenDialog, setHasOpenDialog] = React.useState(false);
  const dropdownTriggerRef = React.useRef(null);
  const focusRef = React.useRef<HTMLElement | null>(null);
  const onClickSave = () => {
    saveRow();
    onChangeClick(false);
  };

  const onClickDelete = () => {
    deleteRow?.();
    onChangeClick(false);
  };

  function handleDialogItemSelect() {
    focusRef.current = dropdownTriggerRef.current;
  }

  function handleDialogItemOpenChange(open: boolean) {
    setHasOpenDialog(open);
    if (open === false) {
      setDropdownOpen(false);
    }
  }

  return (
    <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
      <DropdownMenuTrigger asChild>
        <MoreHorizontalIcon ref={dropdownTriggerRef} />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        hidden={hasOpenDialog}
        onCloseAutoFocus={(event) => {
          if (focusRef.current) {
            focusRef.current.focus();
            focusRef.current = null;
            event.preventDefault();
          }
        }}
      >
        {isEditable ? (
          <>
            <DialogItem
              onSelect={handleDialogItemSelect}
              onOpenChange={handleDialogItemOpenChange}
              triggerChildren={
                <>
                  <Save className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                  저장
                </>
              }
            >
              <DialogHeader>
                <DialogTitle>행 저장</DialogTitle>
                <DialogDescription>
                  해당 내용을 저장하시겠습니까?
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button>취소</Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button type="submit" onClick={onClickSave}>
                    저장
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogItem>
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
              onSelect={handleDialogItemSelect}
              onOpenChange={handleDialogItemOpenChange}
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
                <DialogClose asChild>
                  <Button>취소</Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button type="submit" onClick={onClickDelete}>
                    삭제
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
