import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book } from 'src/app/models/Book.model';
import { CartState } from 'src/app/store/books/book.state';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css'],
})
export class MyOrdersComponent implements OnInit {
  myOrders!: any;
  // currentMonth = new Date().getMonth();
  // currentDate = new Date().getDate();
  // currentYear = new Date().getFullYear();

  constructor(private store: Store<{ cart: CartState }>) {}

  ngOnInit(): void {
    this.store
      .select('cart')
      .subscribe((data) => {
        this.myOrders = data.myOrders;
        console.log("Inside orders",data);
      });
  }
}
