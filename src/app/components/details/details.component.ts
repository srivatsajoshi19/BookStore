import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Book } from 'src/app/models/Book.model';
import { BooksService } from 'src/app/services/books.service';
import { AddBookToCart, BuyNowBook } from 'src/app/store/books/book.actions';
import { CartState } from 'src/app/store/books/book.state';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  book!: any;
  constructor(private store: Store<{ cart: CartState }>, private router: Router) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.cart.selectedBook)
      .subscribe((data) => {
        this.book = data;
      });
  }
  addToCart(book: Book) {
    this.store.dispatch(AddBookToCart({ book }));
  }
  buyNow(book: Book) {
    this.store.dispatch(BuyNowBook({book}));
    this.router.navigate(['checkout'])
  }
}
