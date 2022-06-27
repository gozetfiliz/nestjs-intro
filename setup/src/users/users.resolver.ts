import { Resolver, Query } from '@nestjs/graphql';

@Resolver('User')
export class UsersResolver {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  @Query('users')
  getUsers() {
    return `This action return a users`;
  }

  // @Query('user')
  // getUser() {
  //   return `This action return a user`;
  // }

  // @Mutation()
  // createUser() {
  //   return `This action create a users`;
  // }

  // @Mutation()
  // updateUser() {
  //   return `This action updates a user`;
  // }

  // @Mutation()
  // removeUser() {
  //   return `This action removes a user`;
  // }
}
