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

  return (
    <textarea className={`resize-none border-none outline-none overflow-auto	${className}`} ref={ref} onChange={handleTextChange} value={value}></textarea>
  );
}
