export interface BlogItem {
    id: string;
    title: string;
    type: string;
    shortDescription: string;
    readMinutes: number;
    language?: string;
    externalInfo?: {source: string};
}
