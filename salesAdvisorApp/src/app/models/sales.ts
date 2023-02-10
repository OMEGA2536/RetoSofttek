export interface SaleDTO {
    id: number;
    date: Date;
    advisorName: string;
    productName: string;
    quantity: number;
    cost: number;
}
export interface Sale {
    id: number;
    date: Date;
    advisorId: number;
    productId: number;
    quantity: number;
}