import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/entities/User.entity";
import { UserService } from "./user.service";
import { UserControlller } from "./user.controller";

@Global()
@Module({
    
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UserControlller],
    providers: [UserService],
    exports: [UserService],

})

export class UserModule {

}