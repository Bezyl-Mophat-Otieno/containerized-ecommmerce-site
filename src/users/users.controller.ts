import { Controller } from '@nestjs/common';
import { Delete , Param , ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService:UsersService){}
    @Delete(':id')
    deleteAccount(@Param('id',ParseIntPipe) id:number ) {
      return this.usersService.deleteAccount(id);
    }
}
