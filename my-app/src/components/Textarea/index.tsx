import * as React from "react";

export default function Textarea({
  value,
  className,
  onTextChange,
}: {
  value: string;
  className: string;
  onTextChange: (v: string) => void;
}) {
  const ref = React.useRef<HTMLTextAreaElement>();

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onTextChange(e.target.value);
    if (ref.current) {
      ref.current.style.height = ref.current.scrollHeight + "px";
    }
  };

  React.useEffect(() => {
    if (ref.current) {
      ref.current.style.height = ref.current.scrollHeight + "px";
    }
  }, []); // 마운트 시 textarea height 조정

  return (
    <textarea
      rows={1}
      className={`resize-none border-none outline-none overflow-auto break-keep	${className}`}
      ref={ref}
      onChange={handleTextChange}
      value={value}
    ></textarea>
  );
}
