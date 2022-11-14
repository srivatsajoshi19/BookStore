import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BookComponent } from './components/book/book.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DetailsComponent } from './components/details/details.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { BookTitlePipe } from './pipes/book-title.pipe';
import { EffectsModule } from '@ngrx/effects';
import { BookListComponent } from './components/book-list/book-list.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { Book } from '../app/models/Book.model';
import { cartReducer } from './store/books/book.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BookComponent,
    CheckoutComponent,
    DetailsComponent,
    MyOrdersComponent,
    BookTitlePipe,
    BookListComponent,
    HomeComponent,
    CartComponent,
    SearchResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({cart:cartReducer}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
