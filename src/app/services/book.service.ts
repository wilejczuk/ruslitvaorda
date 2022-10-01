import { Injectable } from '@angular/core';
import { Book } from '../shared/book';
import { BOOK } from '../shared/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBooks(): Book[] {
    return BOOK;
  }

  getBook(id: string): Book {
    return BOOK.filter((book) => (book.id === id))[0];
  }

  getBookById (id: string): Book [] {
    return BOOK.filter((book) => (book.id === id));
  }

  getBookByAuthor (author: string): Book [] {
    return BOOK.filter((book) => (book.authors.includes(author)));
  }

  getBookByCentury (ct: string): Book [] {
    return BOOK.filter((book) => (book.centuries.includes(ct)));
  }

}
