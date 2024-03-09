import { V7CharNamesType } from "@/constants/characterName";
import { usePathname } from "next/navigation";

export const useGetCharacterNameByPath = () => {
  const pathname = usePathname();
  return pathname.split("/")[2] as V7CharNamesType;
};
