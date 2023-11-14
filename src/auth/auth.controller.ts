import { Body, Controller, UseGuards } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { signInDTO, signUpDTO } from 'src/dto';
import { Request } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/roles/roles.guard';
import { Roles } from 'src/roles/roles.decorator';

@Controller('auth')
export class AuthController {

    constructor(private authservice: AuthService , private prismaService:PrismaService){}


    @Post('signup')
    signUp(@Body() dto:signUpDTO){

        return this.authservice.signUp(dto)

    }
    @Post('signin')
    signIn(@Body() dto:signInDTO){

        return this.authservice.signIn(dto)
    }
    @Roles(['admin','user'])
    @UseGuards(AuthGuard('jwt'),RolesGuard)
    @Get('me')
    async getInfo(@Req() req:Request){
        interface reqUserDto {
            id: number;
            name: string;
        }

        const user = req.user as reqUserDto
        const userDetails = await this.prismaService.user.findUnique({
            where:{
                name:user.name
            }

        })
        return userDetails
    }
}
