import * as React from "react";

export default function Popup({
  trigger,
  contents,
}: {
  trigger: React.ReactNode;
  contents: { text: string; onClick: () => void }[];
}) {
  const detailsRef = React.useRef<HTMLDetailsElement>(null);

  const handleClick = (onClick: () => void) => {
    if (detailsRef && detailsRef.current) {
      detailsRef.current.open = false;
    }
    onClick?.();
  };

  return (
    <details className="details-popup" ref={detailsRef}>
      <summary className="flex">{trigger}</summary>
      <div>
        <div className="w-[80px] absolute right-0 top-[5px] z-10 border-1 rounded-lg bg-white_1 ">
          {contents.map((content) => (
            <PopupItem
              key={content.text}
              onClick={() => handleClick(content.onClick)}
            >
              {content.text}
            </PopupItem>
          ))}
        </div>
      </div>
    </details>
  );
}

export function PopupItem({
  children,
  onClick,
  className,
}: {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <div
      className={`text-center text-sm cursor-pointer hover:bg-white_2 p-y-5px p-x-10px rounded-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
