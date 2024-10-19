import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "src/entities/Product.entity";
import { CategoryModule } from "src/category/category.module";
import { UploadModule } from "src/upload/upload.module";

@Module({
    
    imports: [TypeOrmModule.forFeature([Product]), CategoryModule, UploadModule],
    controllers: [ProductController],
    providers: [ProductService],
    exports: [ProductService],

})
export class ProductModule {}