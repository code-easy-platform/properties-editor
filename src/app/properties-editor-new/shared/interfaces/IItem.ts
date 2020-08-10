import { IProperties } from "./";

export interface IItem {
    id: string | undefined;
    name: string;
    subname?: string;
    isHeader: boolean;
    properties: IProperties[];
}