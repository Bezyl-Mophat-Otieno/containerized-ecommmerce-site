import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { JWTstrategy } from 'src/strategy/JWTstrategy';

@Module({
  imports:[JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService , PrismaService , JWTstrategy]
})
export class AuthModule {}
