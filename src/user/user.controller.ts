import { Controller, Get, Param } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('users')
export class UserControlller {
    constructor(
        private userService: UserService
    ) {}

    @Get()
    list() {
        return this.userService.find()
    }

    @Get(':id')
    getUser(@Param('id') id: number) {
        return this.userService.find( { id } )
    }

}