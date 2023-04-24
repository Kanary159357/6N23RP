import { useSnapshot } from "valtio";
import { modalState } from "./store";
import DeleteCheckModal from "../DeleteCheckModal";

export default function ModalContainer() {
  return (
    <>
      <DeleteCheckModal />
    </>
  );
}
