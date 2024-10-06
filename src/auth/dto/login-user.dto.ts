import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsEmail, IsString, Matches } from "class-validator";

export class LoginUserDto {

    @Type()
    @IsEmail()
    @ApiProperty( { default: 'Emailinizi daxil edin...' } )
    email: string;

    @Type()
    @IsString()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/)
    @ApiProperty( { default: 'Şifrənizi daxil edin...' } )
    password: string;

}