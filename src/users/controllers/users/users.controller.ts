import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from 'src/users/services/user/user.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UserService){
    }
  @Get()
   public async getUsers(): Promise<object> {
    return await this.userService.getUsers()
  }
  @Get(':id')
  public async getUser(@Param() params): Promise<object> {
      const {id} = params;
      console.log(id);
    return await this.userService.getUser(id);
  }
}
