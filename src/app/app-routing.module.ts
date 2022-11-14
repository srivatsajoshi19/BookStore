import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'myOrders', component: MyOrdersComponent },
  { path: 'booksDetails', component: DetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'searchResults', component: SearchResultsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
