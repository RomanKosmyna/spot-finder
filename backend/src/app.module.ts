import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthModule } from './auth';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from './user';
import { VenueModule } from './venue';
import { TokenModule, TokenService } from './token';
import { ScheduleModule } from '@nestjs/schedule';
import { CronService } from './cron/cron.service';
import { CronModule } from './cron/cron.module';

@Module({
  imports: [
    AuthModule,
    JwtModule,
    UserModule,
    VenueModule,
    TokenModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    ScheduleModule.forRoot(),
    CronModule,
  ],
  controllers: [AppController],
  providers: [AppService, CronService, TokenService],
})
export class AppModule {}
