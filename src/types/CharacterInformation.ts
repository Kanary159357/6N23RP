export interface CharacterInformation {

    standing: Standing[]
    up: Up[]
    combo: Skill[]
    Throw: Throw[]
    Extrahit: Extrahit[]
    Info: InfoProps[];
    Pattern: Pattern[];
    WallCombo: WallCombo[];
}

export const punishProps = ['frame', 'damage', 'command', 'range', 'hitframe', 'state'] as const

export const skillProps = ['command', 'state'] as const;

export type Standing = Record<typeof punishProps[number], string>
export type Up = Record<typeof punishProps[number], string>


export type Skill = Record<typeof skillProps[number], string>
export type WallCombo = Record<typeof skillProps[number], string>
export type Pattern = Record<typeof skillProps[number], string>


export interface MainMove {
    command: string;
    damage: string;
    frame: string;
    guardframe: string;
    hitframe: string;
    range: string;
    nickname: string;
    state: string;
}

export interface Throw {
    command: string;
    frame: any;
    way: string;
    damage: any;
    state: string;
}

export interface Extrahit {
    command: string;
    state: string;
    win: string;
}

export interface InfoProps {
    punish: string;
    combo: string;
    dc: string;
    name: string;
}