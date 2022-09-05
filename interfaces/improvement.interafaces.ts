export interface Item {
    page: number;
    id: number;
    photo: string;
    title: string;
    description: string;
}

export interface ImprovementPage {
    pages: number;
    id: number;
    title: string;
    description: string;
    items: Item[];
}