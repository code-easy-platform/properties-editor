import { IProperties } from "./";

export interface IItem {
    id: string | undefined;
    name: string;
    subname?: string;
    properties: IProperties[];
}