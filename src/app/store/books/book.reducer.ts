import { Action, createReducer, on } from '@ngrx/store';
import { initialState } from './book.state';
import {
  AddBookToCart,
  RemoveBookFromCart,
  SelectedBook,
  BuyNowBook,
  SetBookToBeSearched,
  AddBooksToOrder,
} from './book.actions';

const _cartReducer = createReducer(
  initialState,
  on(AddBookToCart, (state, action) => {
    return {
      ...state,
      cart: [...state.cart, action.book],
    };
  }),
  on(RemoveBookFromCart, (state, actions) => {
    return {
      ...state,
      cart: state.cart.filter((item) => {
        return item.title !== actions.book.title;
      }),
    };
  }),
  on(SelectedBook, (state, action) => {
    return {
      ...state,
      selectedBook: action.book,
    };
  }),
  on(BuyNowBook, (state, action) => {
    return {
      ...state,
      buyNowBook: action.book,
    };
  }),
  on(SetBookToBeSearched, (state, action) => {
    return {
      ...state,
      bookToSearch: action.book,
    };
  }),
  on(AddBooksToOrder, (state, action) => {
    return {
      ...state,
      myOrders: [...state.myOrders, ...action.books],
    };
  })
);

export function cartReducer(state: any, action: Action) {
  return _cartReducer(state, action);
}
