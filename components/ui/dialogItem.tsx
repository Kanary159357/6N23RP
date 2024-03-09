import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "./dialog";
import { DropdownMenuItem } from "./dropdown-menu";

import { DialogPortal, DialogOverlay } from "@radix-ui/react-dialog";
// eslint-disable-next-line react/display-name
export const DialogItem = React.forwardRef<
  _,
  {
    children: React.ReactNode;
    triggerChildren: React.ReactNode;
    onSelect?: () => void;
    onOpenChange?: (v: boolean) => void;
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
