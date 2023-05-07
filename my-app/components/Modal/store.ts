import { proxy } from "valtio";
import { CharacterInformation } from "../../types/CharacterInformation";

export type ModalName = "deleteCheckModal" | "confirmModal";

export const modalState = proxy<{
  currentOpenedModal?: ModalName;
  row?: any;
  columnType?: keyof CharacterInformation;
}>({});

export const openDeleteCheckModal = ({ row, columnType }) => {
  modalState.currentOpenedModal = "deleteCheckModal";
  modalState.row = row;
  modalState.columnType = columnType;
};
export const openConfirmModal = () => {
  modalState.currentOpenedModal = "confirmModal";
};

export const closeModal = () => {
  modalState.currentOpenedModal = null;
};
