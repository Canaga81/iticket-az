import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "src/entities/Product.entity";
import { In, Repository } from "typeorm";
import { FindProductParams } from "./product.types";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { CategoryService } from "src/category/category.service";

@Injectable()
export class ProductService {

    constructor(
        private categoryService: CategoryService,
        @InjectRepository(Product)
        private productRepo: Repository<Product>
    ) {}

    async find( { where, select, relations }: FindProductParams = {} ) {
        return this.productRepo.find( { where, select, relations } )
    }

    async findOne( { where, select, relations }: FindProductParams = {}) {
        return this.productRepo.findOne( { where, select, relations } )
    }

    async create(params: CreateProductDto) {

        const categories = await this.categoryService.findByIds(params.categories)
        
        let product =  this.productRepo.create({...params, categories});
        await product.save();
        
        return product;
    
    }

    async update(id: number, params: UpdateProductDto) {
        
        let product = await this.findOne( { where: { id } } );

        for(let key in params) {
            if(key === 'categories') {

                let categories = await this.categoryService.findByIds(params.categories)
                product.categories.push(...categories);

            }
            else{
                product[key] = params[key];
            }
        }

        await product.save();
        return product;

    }

    async delete(id: number) {

        let result = await this.productRepo.delete( { id } );
        if (result.affected === 0) throw new NotFoundException();
        return {
            message: 'Məhsul uğurla silindi.',
        };

    }

}