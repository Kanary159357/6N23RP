import * as React from "react";
import clsx from "clsx";

export default function Button({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      className={`w-fit h-25px p-y-5px p-x-15px flex items-center rounded-2xl`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
