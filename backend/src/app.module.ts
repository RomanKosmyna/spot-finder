import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { PrismaModule } from './core/orm/prisma.module';
import { UserService } from './user/user.service';
import { CommonModule } from './common/common.module';
import { CommonService } from './common/common.service';
import { PasswordService } from './password/password.service';
import { PasswordModule } from './password/password.module';
import { JwtService } from './jwt/jwt.service';
import { JwtModule } from './jwt/jwt.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    PrismaModule,
    CommonModule,
    PasswordModule,
    JwtModule,
  ],
  controllers: [AppController, AuthController, UserController],
  providers: [
    AppService,
    AuthService,
    UserService,
    CommonService,
    PasswordService,
    JwtService,
  ],
})
export class AppModule {}
