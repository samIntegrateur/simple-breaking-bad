export interface Character {
    char_id: number;
    name: string;
    birthday: string;
    occupation: string[];
    img: string;
    status: "Deceased" | "Alive";
    appearance: number[];
    nickname?: string;
    portrayed?: string;
    better_call_saul_appearance?: number[],
}
