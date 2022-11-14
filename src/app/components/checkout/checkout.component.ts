import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Book } from 'src/app/models/Book.model';
import { BooksService } from 'src/app/services/books.service';
import {
  AddBooksToOrder,
  RemoveBookFromCart,
} from 'src/app/store/books/book.actions';
import { CartState } from 'src/app/store/books/book.state';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  books!: Book[];
  address!: any;
  constructor(
    private store: Store<{ cart: CartState }>,
    private bookService: BooksService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store.select('cart').subscribe((data) => {
      this.books = data.cart;
    });
    this.getAddress();
  }
  removeFromCart(book: Book) {
    this.store.dispatch(RemoveBookFromCart({ book }));
  }

  getAddress() {
    this.bookService.getAddress().subscribe((address) => {
      this.address = address;
    });
  }
  placeOrder(books: Book[]) {
    this.store.dispatch(AddBooksToOrder({ books }));
    this.router.navigate(['myOrders']);
  }
  cancelOrder() {
    this.router.navigate(['cart']);
  }
}
