import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get(':userId')
  getUsers(@Param('userId') userId: string) {
    return `user ${userId}`;
  }
}
