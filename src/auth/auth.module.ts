import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UserModule } from "src/user/user.module";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";
import config from "src/config/config";

@Module({
    imports: [
        JwtModule.register({
            global: true,
            secret: config.jwtSecret,
            signOptions: { expiresIn: '60m' },
        }),
        UserModule
    ],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {

}