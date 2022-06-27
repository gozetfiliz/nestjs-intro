
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateUserInput {
    id: string;
    name: string;
    age: number;
}

export class UpdateUserInput {
    id: string;
    name: string;
    age: number;
}

export class Book {
    userId?: Nullable<string>;
    name?: Nullable<string>;
    page?: Nullable<number>;
}

export class User {
    id?: Nullable<string>;
    name?: Nullable<string>;
    age?: Nullable<number>;
    surname?: Nullable<string>;
    books?: Nullable<Nullable<Book>[]>;
}

export class Status {
    status?: Nullable<boolean>;
}

export abstract class IQuery {
    abstract users(): User[] | Promise<User[]>;

    abstract user(id?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createUser(createUserInput?: Nullable<CreateUserInput>): Nullable<User> | Promise<Nullable<User>>;

    abstract updateUser(updateUserInput?: Nullable<UpdateUserInput>): Nullable<User> | Promise<Nullable<User>>;

    abstract removeUser(id?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
