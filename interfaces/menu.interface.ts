import { AboutPage } from "./about.interfaces";
import { MainPage } from "./main.interfaces";

export interface Catalog {
    pages: number;
    id: number;
    title: string;
}

export interface About {
    id: number;
    title: string;
    description: string;
    logo: string;
    services: string[];
    subTitle: string;
    subDescription: string;
}

export interface Contacts {
    pages: number;
    id: number;
    title: string;
    email: string;
    phone: string[];
    address: string;
    city: string;
    timeWork: string[];
}

export interface Menu {
    id: number;
    firstCategory: string[];
    logo: string;
    catalog: Catalog;
    main: MainPage;
    about: AboutPage;
    contacts: Contacts;
}