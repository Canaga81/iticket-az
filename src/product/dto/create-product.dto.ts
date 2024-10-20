import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString, Length, MaxLength, Min } from "class-validator";

export class CreateProductDto {

    @Type()
    @IsString()
    @ApiProperty()
    @Length(3, 50)
    name: string;

    @Type()
    @IsNumber()
    @ApiProperty()
    @Min(0)
    price: number;

    @Type()
    @IsString()
    @ApiProperty()
    @MaxLength(500)
    description: string;

    @Type()
    @IsString()
    @ApiProperty()
    @Length(0, 120)
    place: string;

    @Type()
    @IsNumber({}, { each: true })
    @ApiProperty()
    images: number[];

    @Type()
    @IsNumber({}, { each: true })
    @ApiProperty({ type: Number, isArray: true })
    @IsOptional()
    categories: number[];

}