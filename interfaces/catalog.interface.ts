

export interface ProductCategory {
    id: number;
    nameCategory: string;
    title: string;
}

export interface MenuItem {
    page: number;
    id: number;
    title: string;
    productCategory: ProductCategory[];
}

export interface Product {
    id: number;
    image: string;
    title: string;
    description: Description;
    price: number;
    oldPrice: number;
    category: string;
}

export interface ProductSpace {
    id: number;
    nameCategory: string;
    title: string;
    products: Product[];
}

export interface Description {
    id: number;
    priceIncludes: string;
    priceInComplect: string;
    polishing: string;
    productionTime: string;
    decor: string;
    stellaSize: string;
    cabinetSize: string;
    floowerBadSizes: string;
    otherSize: string;
    materials: string;
    granitRock: string;
    color: string;
    overallSize: string;
    guarantee: string;
    format: string;
    storage: string;
    otherGranitRock: string;
}



