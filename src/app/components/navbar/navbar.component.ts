import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  pluck,
} from 'rxjs';
import { Book } from 'src/app/models/Book.model';
import { BooksService } from 'src/app/services/books.service';
import { SetBookToBeSearched } from 'src/app/store/books/book.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(
    private store: Store,
    private router: Router,
    private bookService: BooksService
  ) {}
  searchedBook!: any;
  onSearch(title: string) {
    this.bookService.findBook(title).subscribe((bookObj) => {
      this.searchedBook = bookObj;
      console.log(bookObj);
      this.store.dispatch(SetBookToBeSearched(this.searchedBook ));
    });
    this.router.navigate(['searchResults']);
    console.log(title);
  }
}
