import { Product, ProductKey } from "src/entities/Product.entity";
import { FindOptionsWhere } from "typeorm";

export interface FindProductParams {
    
    where?: FindOptionsWhere<Product>,
    select?: Array<ProductKey>,
    relations?: string[],

    filter?: {
        name?: string,
        price?: [number, number],
        categories?: number[],
        place?: string,
        time?: string,
        eventDate?: [Date, Date];
    };
    pagination?: {
        limit: number,
        page: number,
    };

}