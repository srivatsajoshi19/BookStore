import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book } from 'src/app/models/Book.model';
import { RemoveBookFromCart } from 'src/app/store/books/book.actions';
import { CartState } from 'src/app/store/books/book.state';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart !: Book[]; 
  constructor(private store: Store<{cart: CartState}>) {}

  ngOnInit(): void {
    this.store.select('cart').subscribe((data) => {
      this.cart = data.cart;
    });
  }
  removeFromCart(book:Book){
    this.store.dispatch(RemoveBookFromCart({book}));
  }
}
