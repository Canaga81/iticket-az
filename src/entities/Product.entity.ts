import { BeforeRemove, Column, Entity, ManyToMany, OneToMany } from "typeorm";
import { CommonEntity } from "./Common.entity";
import { Category } from "./Category.entity";
import { ImageEntity } from "./Image.entity";


export type ProductKey = keyof Product


@Entity()
export class Product extends CommonEntity {

    @Column()
    name: string;
    
    @Column()
    price: number;

    @Column()
    description: string;

    @Column({ type: 'timestamp', nullable: true })
    eventDate: Date;

    @Column()
    place: string;

    @ManyToMany(() => Category, (category) => category.products, { onDelete: 'CASCADE' })
    categories: Partial<Category>[];

    @OneToMany(() => ImageEntity, (image) => image.product, { eager: true } )
    images: Partial<ImageEntity>[];

}