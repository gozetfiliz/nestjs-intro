import { Controller, Get, Post, Delete, Patch } from '@nestjs/common';

@Controller('users')
export class UsersController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  @Get('all')
  findAll() {
    return `This action return all users`;
  }

  @Post()
  create() {
    return `This action create a user`;
  }

  @Get()
  findOne() {
    return `This action return a user`;
  }

  @Patch()
  update() {
    return `This action updates a user`;
  }

  @Delete()
  remove() {
    return `This action removes a user`;
  }
}
