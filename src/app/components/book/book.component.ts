import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book } from 'src/app/models/Book.model';
import { BooksService } from 'src/app/services/books.service';
import {SelectedBook} from '../../store/books/book.actions'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  @Input() book!: Book;
  constructor(private store: Store, private bookService: BooksService) {}

  ngOnInit(): void {}

  selectBook(book:Book) {
    this.bookService.currentBook = this.book;
    this.store.dispatch(SelectedBook({book}));
  }
}
