import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { CommonModule } from '../common/common.module';
import { PasswordModule } from '../password/password.module';
import { UserService } from '../user/user.service';
import { CommonService } from '../common/common.service';
import { PasswordService } from '../password/password.service';
import { AuthController } from './auth.controller';

@Global()
@Module({
  providers: [AuthService, UserService, CommonService, PasswordService],
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: {
        expiresIn: '10m',
      },
    }),
    UserModule,
    CommonModule,
    PasswordModule,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
