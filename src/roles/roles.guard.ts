import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Roles } from './roles.decorator';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector:Reflector){}
  canActivate(
    context: ExecutionContext,
  ): boolean{
    //Get the roles from the Handler

    const roles = this.reflector.get(Roles, context.getHandler())

    const request = context.switchToHttp().getRequest();
    const user = request.user
    console.log(user)

    // return roles.includes(user.role)
    return true
}
}
