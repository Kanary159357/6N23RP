import { useSnapshot } from "valtio";
import Button from "../Button";
import PopupModal from "../Modal";
import { closeModal, modalState } from "../Modal/store";
import { CharacterInformation } from "../../types/CharacterInformation";
import { pageState } from "../../store/pageStore";
import { deleteV7Row } from "../../query/v7/deleteRow";
import axios from "axios";
export default function DeleteCheckModal() {
  const { currentOpenedModal, row, columnType } = useSnapshot(modalState);
  const isOpen = currentOpenedModal === "deleteCheckModal";

  const { characterName, user } = useSnapshot(pageState, { sync: true });
  const handleDeleteRow = async () => {
    // deleteV7Row({
    //   row,
    //   char: characterName,
    //   columnType,
    // });
    const { data } = await axios.get("/api/v7/character");
    console.log(data);
    closeModal();
  };
  return (
    <PopupModal isOpen={isOpen} onRequestClose={closeModal}>
      <PopupModal.Header></PopupModal.Header>
      <PopupModal.Body>정말 삭제하시겠습니까?</PopupModal.Body>
      <PopupModal.Footer className="flex gap-5px">
        <div className="flex items-center justify-center	 gap-6px">
          <button
            className={`w-fit bg-black_1 text-white_1 p-y-5px p-x-25px flex items-center rounded-xl`}
            onClick={handleDeleteRow}
          >
            삭제
          </button>
          <button
            className={`w-fit bg-black_1 text-white_1 p-y-5px p-x-25px flex items-center rounded-xl`}
            onClick={closeModal}
          >
            취소
          </button>
        </div>
      </PopupModal.Footer>
    </PopupModal>
  );
}

export function RoundButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      className={`w-fit bg-black_1 text-white_1 p-y-5px p-x-25px flex items-center rounded-xl`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
