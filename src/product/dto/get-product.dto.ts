import { ApiProperty } from "@nestjs/swagger";
import { Type, Transform } from "class-transformer";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class GetProductDto {

    @Type()
    @IsOptional()
    @ApiProperty( { default: 'Ad Axtar...', required: false } )
    @IsString()
    name: string;

    @Type()
    @IsOptional()
    @ApiProperty( { default: 'Keçiriləcəyi məkan', required: false } )
    @IsString()
    place: string;

    @Type()
    @IsOptional()
    @ApiProperty( { default: 0, required: false } )
    @IsNumber( {}, {each: true} )
    minPrice: number;

    @Type()
    @IsOptional()
    @ApiProperty( { default: 450000, required: false } )
    @IsNumber( {}, {each: true} )
    maxPrice: number;

    @Type()
    @IsOptional()
    @ApiProperty( { default: '1,2',type: String, required: false } )
    @Transform(({value}) => value?.split(','))
    categories: number[];

    @Type(() => Date)
    @IsOptional()
    @ApiProperty({ type: [Date], description: 'Tədbirin tarixi aralığı', default: [new Date(), new Date()], required: false })
    eventDate: [Date, Date];

}