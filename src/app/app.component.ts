import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BooksService } from './services/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'BookStore';
  

  constructor( private store: Store) { }
 
}
