import { Body, Controller, Delete, Get, Param, Post, Query, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { ProductService } from "./product.service";
import { AuthGuard } from "src/guards/auth.guard";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { GetProductDto } from "./dto/get-product.dto";

@Controller('product')
@ApiTags('Product')
export class ProductController {
    
    constructor(
        private productService: ProductService,
    ) {}

    @Get()
    list(@Query() query: GetProductDto) {
        let price: [number, number] = [query.minPrice, query.maxPrice]
        return this.productService.find( { 
            relations: ['categories'], 
            pagination: { limit: query.limit, page: query.page }, 
            filter: {...query, price},
        } );
    }

    @Get(':id')
    item(@Param('id') id: number) {
        return this.productService.findOne( { where: { id }, relations: ['categories'] } );
    }

    @Post()
    @UseGuards(AuthGuard)
    @ApiBearerAuth()
    create(@Body() body: CreateProductDto) {
        return this.productService.create(body);
    }

    @Post(':id')
    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    update(@Param('id') id: number, @Body() body: UpdateProductDto) {
        return this.productService.update(id, body);
    }

    @Delete(':id')
    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    delete(@Param('id') id: number) {
        return this.productService.delete(id);
    }

}