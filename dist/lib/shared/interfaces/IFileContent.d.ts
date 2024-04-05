export interface IFileContent {
    content: string | null;
    lastModified?: number;
    name: string;
    size?: number;
    type?: string;
}
