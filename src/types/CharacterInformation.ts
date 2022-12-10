export interface CharacterInformation {
    standing: Punish[]
    up: Punish[]
    combo: Skill[]
    Throw: Throw[]
    Extrahit: Extrahit[]
    Pattern: Skill[];
    WallCombo: Skill[];
    MainMove: MainMove[];
}

export const punishProps = ['frame', 'damage', 'command', 'range', 'hitframe', 'state'] as const

export const skillProps = ['command', 'state'] as const;

export const mainMoveProps = ['command', 'damage', 'frame', 'guardFrame', 'hitframe', 'range', 'nickname', 'state'] as const
export const throwProps = ['command', 'frame', 'way', 'damage', 'state'] as const
export const extrahitProps = ['command', 'state'] as const

export type Punish = Record<typeof punishProps[number], string>
export type Skill = Record<typeof skillProps[number], string>
export type MainMove = Record<typeof mainMoveProps[number], string>
export type Throw = Record<typeof throwProps[number], string>
export type Extrahit = Record<typeof extrahitProps[number], string>

export const allTableColumnProps = [...punishProps, ...skillProps, ...mainMoveProps, ...throwProps, ...extrahitProps];

export const labelText: Record<typeof allTableColumnProps[number], string> = {
    "command": "커맨드",
    "damage": "데미지",
    "frame": "프레임",
    "guardFrame": "가드프레임",
    "hitframe": "히트프레임",
    "nickname": "별명",
    "range": "판정",
    "state": "설명",
    "way": "방향",
}