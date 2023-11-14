import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ForbiddenException } from '@nestjs/common';

@Injectable()
export class UsersService {
    constructor(private prismaService:PrismaService){}

    async deleteAccount(id:number) {
        const user = await this.prismaService.user.findUnique({
          where:{
            id:id
          }
        })
    
        if(!user)return new ForbiddenException('User does not Exist')
    
        const deletedUser = await this.prismaService.user.delete({
          where:{
            id:id
          }
        })
    
        return deletedUser
    
      }
}
