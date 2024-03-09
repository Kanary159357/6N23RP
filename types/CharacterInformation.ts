import { getTypedKeys } from "@/lib/getTypedKeys";
import { z } from "zod";

const punishSchema = z.object({
  frame: z.string().optional(),
  damage: z.string().optional(),
  command: z.string().optional(),
  range: z.string().optional(),
  hitframe: z.string().optional(),
  state: z.string().optional(),
});

const skillSchema = z.object({
  command: z.string().optional(),
  state: z.string().optional(),
});

const mainMoveSchema = z.object({
  command: z.string().optional(),
  damage: z.string().optional(),
  frame: z.string().optional(),
  guardFrame: z.string().optional(),
  hitframe: z.string().optional(),
  range: z.string().optional(),
  nickname: z.string().optional(),
  state: z.string().optional(),
});

const throwSchema = z.object({
  command: z.string().optional(),
  frame: z.string().optional(),
  way: z.string().optional(),
  damage: z.string().optional(),
  state: z.string().optional(),
});

const extrahitSchema = z.object({
  command: z.string().optional(),
  state: z.string().optional(),
});



export type Punish = z.infer<typeof punishSchema>;
export type Skill = z.infer<typeof skillSchema>;
export type MainMove = z.infer<typeof mainMoveSchema>;
export type Throw = z.infer<typeof throwSchema>;
export type Extrahit = z.infer<typeof extrahitSchema>;
export type TableType = Punish|Skill|MainMove|Throw|Extrahit;
export const CharacterInformationSchema = z.object({
  standing: z.array(punishSchema),
  up: z.array(punishSchema),
  combo: z.array(skillSchema),
  Throw: z.array(throwSchema),
  Extrahit: z.array(extrahitSchema),
  Pattern: z.array(skillSchema),
  WallCombo: z.array(skillSchema),
  MainMove: z.array(mainMoveSchema),
});

export const punishProps = getTypedKeys(punishSchema.shape);
export const skillProps = getTypedKeys(skillSchema.shape);
export const mainMoveProps = getTypedKeys(mainMoveSchema.shape);
export const throwProps = getTypedKeys(throwSchema.shape);
export const extrahitProps = getTypedKeys(extrahitSchema.shape);
export const characterInformationProps = getTypedKeys(CharacterInformationSchema.shape);
export const allTableColumnProps = [
  ...punishProps,
  ...skillProps,
  ...mainMoveProps,
  ...throwProps,
  ...extrahitProps,
];
export const characterInformationPropsMapper = {
  standing: punishProps,
  up:punishProps,
  combo: skillProps,
  Throw: throwProps,
  Extrahit: extrahitProps,
  Pattern: skillProps,
  WallCombo: skillProps,
  MainMove: mainMoveProps,
};
export type CharacterInformation = z.infer<typeof CharacterInformationSchema>;

export const labelText: Record<string, string> = {
  command: "커맨드",
  damage: "데미지",
  frame: "프레임",
  guardFrame: "가드프레임",
  hitframe: "히트프레임",
  nickname: "별명",
  range: "판정",
  state: "설명",
  way: "방향",
};


export const tableKeyTextMap = {
  combo: {
    name: "콤보",
  },
  standing: {
    name: "선자세 딜캐",
  },
  up: {
    name: "앉은자세 딜캐",
  },
  MainMove: {
    name: "주력기",
  },
  Pattern: {
    name: "패턴",
  },
  WallCombo:{
    name: "벽콤보"
  },
  Throw: {
    name: "잡기",
  },
  Extrahit: {
    name: "추가타",
  },
};

export const sortObjectProperties = <T extends z.ZodRawShape>(
  obj: Record<string, unknown>,
  schema: z.ZodObject<T>
): Record<string, unknown> => {
  const sortedObj: Record<string, unknown> = {};
  Object.keys(schema.shape)
    .forEach((key) => {
      if (obj.hasOwnProperty(key)) {
        sortedObj[key] = obj[key];
      }
    });
  return sortedObj;
};