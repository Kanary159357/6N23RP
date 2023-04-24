import { proxy } from "valtio";

interface User {
  displayName: string;
  uid: string;
  photoUrl: string;
}

export const pageState = proxy<{ user?: User; characterName?: string }>();

export const setUser = (user: User) => {
  pageState.user = user;
};
export const setCharacterName = (characterName: string) => {
  pageState.characterName = characterName;
};
