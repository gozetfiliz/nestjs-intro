import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as data from './users.json';

@Injectable()
export class UsersService {
  users: User[] = data.users.slice();
  findAllUsers() {
    return `This action returns all users`;
  }

  findUser(id: string) {
    return `This action returns a #${id} user`;
  }

  createUser(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  updateUser(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  removeUser(id: string) {
    return `This action removes a #${id} user`;
  }
}
