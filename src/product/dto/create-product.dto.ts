import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsString, IsUrl, Length, MaxLength, Min } from "class-validator";

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
    @Length(3, 90)
    history: string;

    @Type()
    @IsString()
    @ApiProperty()
    @Length(0, 120)
    place: string;

    @Type()
    @IsString()
    @ApiProperty()
    @IsUrl()
    image: string;

}