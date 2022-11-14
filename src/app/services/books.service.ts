import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/Book.model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  currentBook!: Book;
  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get('http://localhost:3000/books');
  }

  findBook(title: string) {
    return this.http.get(`http://localhost:3000/books?title=${title}`);
  }

  getAddress() {
    return this.http.get('http://localhost:3000/address');
  }
}
