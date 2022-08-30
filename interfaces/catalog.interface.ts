

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
    description: string;
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



