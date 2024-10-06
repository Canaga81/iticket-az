import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UserModule } from "src/user/user.module";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
    imports: [
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => {
                return {
                    global: true,
                    secret: configService.get('JWT_SECRET'),
                    signOptions: { expiresIn: '60m' },
                }
            },
            inject: [ConfigService],
        }),
        UserModule
    ],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {

}