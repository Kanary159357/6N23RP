import ReactModal from "react-modal";

export default function PopupModal({
  isOpen,
  children,
  onRequestClose,
}: {
  isOpen: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <ReactModal
      onRequestClose={onRequestClose}
      className={
        "absolute top-1/2 left-1/2 w-[400px] p-[40px] bg-white_1 -translate-x-2/4 -translate-y-2/4 flex flex-col gap-[10px]	items-center	rounded-sm"
      }
      overlayClassName={"fixed top-0 left-0 right-0 bottom-0 z-50 bg-overlay"}
      isOpen={isOpen}
    >
      {children}
    </ReactModal>
  );
}

export const PopupModalFooter = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return <footer className={`p-0 m-0 ${className}`}>{children}</footer>;
};

export const PopupModalBody = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return <main className={`p-0 m-0 ${className}`}>{children}</main>;
};

export const PopupModalHeader = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return <header className={`p-0 m-0 ${className}`}>{children}</header>;
};
PopupModal.Header = PopupModalHeader;
PopupModal.Footer = PopupModalFooter;
PopupModal.Body = PopupModalBody;
