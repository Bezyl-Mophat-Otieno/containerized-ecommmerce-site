import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule,ConfigModule.forRoot({
    isGlobal:true
  }),UsersModule,PrismaModule],
  controllers: [AppController],
  providers: [AppService, UsersService],
  
})
export class AppModule {}
