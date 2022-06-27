import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as data from './users.json';

@Injectable()
export class UsersService {
  users: User[] = data.users.slice();
  findAllUsers(): User[] {
    return [...this.users];
  }

  findUser(id: string): User {
    return this.users.find((user) => user.id === id);
  }

  createUser(createUserDto: CreateUserDto): User {
    const index = this.users.findIndex((user) => user.id === createUserDto.id);
    if (index > 0)
      throw new HttpException('This user id is already in use.', 500);

    const newUser = {} as User;
    newUser.id = createUserDto.id;
    newUser.name = createUserDto.name;
    newUser.age = createUserDto.age;

    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: string, updateUserDto: UpdateUserDto): User {
    const index = this.users.findIndex((user) => user.id === id);
    if (index < 0) throw new HttpException('No user found for this id.', 404);

    const updatedUser = { ...updateUserDto };
    this.users[index] = updatedUser;
    return updatedUser;
  }

  removeUser(id: string): User {
    const index = this.users.findIndex((user) => user.id === id);
    if (index < 0) throw new HttpException('No user found for this id.', 404);

    const removedUser = this.users.splice(index, 1)[0];
    return removedUser;
  }
}
