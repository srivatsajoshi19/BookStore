import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Book } from 'src/app/models/Book.model';
import { BooksService } from 'src/app/services/books.service';
import { AddBookToCart, BuyNowBook } from 'src/app/store/books/book.actions';
import { CartState } from 'src/app/store/books/book.state';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  book!: any;
  title!: string;
  constructor(
    private store: Store<{ cart: CartState }>,
    private router: Router,
    private bookService: BooksService
  ) {}

  ngOnInit(): void {
    this.store.select('cart').subscribe((data) => {
      this.title = data.bookToSearch;
      console.log(data);
    });
  }
  addToCart(book: Book) {
    this.store.dispatch(AddBookToCart({ book }));
  }
  buyNow(book: Book) {
    this.store.dispatch(BuyNowBook({ book }));
    this.router.navigate(['checkout']);
  }
}
