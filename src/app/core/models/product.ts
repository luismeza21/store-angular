export interface Product {
    image: string;
    name: string;
    description: string;
    rating: number;
    price: number;
    discount?: number;
    votes: number;
    quantity: number;
}