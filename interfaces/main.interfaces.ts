export interface Card {
    mainPage: number;
    id: number;
    title: string;
    price: number;
    description: string[];
    freeDescription: string[];
}

export interface Advatages {
    mainPage: number;
    id: string;
    title: string;
    subTitle: string;
    description: string[];
}

export interface Gallery {
    mainPage: number;
    id: number;
    title: string;
    image: string[];
}

export interface Consultations {
    mainPage: number;
    id: number;
    title: string;
    subTitle: string;
    description: string;
}

export interface MainPage {
    id: number;
    title: string;
    description: string;
    specificsWork: string[];
    titleIndividualPlanWork: string[];
    cards: Card[];
    advatages: Advatages;
    gallery: Gallery;
    consultations: Consultations;
}
