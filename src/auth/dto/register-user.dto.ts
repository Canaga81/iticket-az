import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsString, Length } from "class-validator";
import { LoginUserDto } from "./login-user.dto";

export class RegisterUserDto extends LoginUserDto {

    @Type()
    @IsString()
    @ApiProperty( { default: 'Adınızı daxil edin...' } )
    @Length(3, 30)
    firstName: string;

    @Type()
    @IsString()
    @Length(3, 30)
    @ApiProperty( { default: 'Soyadınızı daxil edin...' } )
    lastName: string;

}