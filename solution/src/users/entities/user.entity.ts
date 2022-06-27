import { Book } from 'src/books/entities/book.entity';

export class User {
  id: string;
  name: string;
  age: number;
  books?: [Book];
}
