import { ForbiddenException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    constructor(private prismaService : PrismaService , private jwtService:JwtService , private configService:ConfigService){}

    async signUp(dto){
        const {name , password} = dto
        const hashedPwd = await bcrypt.hash(password,10)   

        const user = await this.prismaService.user.findUnique({
            where:{
                name:name
            }
        })
        if(user) return new ForbiddenException('User already exists')

        const newUser = await this.prismaService.user.create({
            data:{
                name:name,
                password:hashedPwd
            }
        })

        return newUser


    }

    async signIn(dto){

        const {name,password} = dto

        const user = await this.prismaService.user.findUnique({
            where:{
                name:name
            }

        })
        if(!user) return new ForbiddenException('User not found')
        const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch) return new ForbiddenException('Invalid Credentials')

    const payload = {
        id:user.id,
        name:user.name,
        role:user.role
    }

    const token = await this.jwtService.signAsync(payload,{
        expiresIn:'30m',
        secret: this.configService.get('JWT_SECRET')
    })


    return {access_token:token}
    }
}
