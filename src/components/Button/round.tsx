import * as React from "react";

export default function RoundButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      className={`w-fit p-y-20px p-x-25px flex items-center rounded-2xl`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
