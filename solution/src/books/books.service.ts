import { Injectable } from '@nestjs/common';
import * as data from './books.json';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  books: Book[] = data.books.slice();
  findBooksByUserId(id: string): Book[] {
    return this.books.filter((book) => book.userId === id);
  }
}
