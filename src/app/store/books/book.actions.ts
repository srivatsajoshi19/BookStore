import { createAction, props } from '@ngrx/store';
import { Book } from '../../models/Book.model';

export const AddBookToCart = createAction(
  'AddBookToCart',
  props<{ book: Book }>()
);
export const RemoveBookFromCart = createAction(
  'RemoveBookFromCart',
  props<{ book: Book }>()
);

export const SelectedBook = createAction(
  'SelectedBook',
  props<{ book: Book }>()
);
export const SetBookToBeSearched = createAction(
  'SetBookToBeSearched',
  props<{ book: Book}>()
);
export const AddBooksToOrder = createAction(
  'AddBooksToOrder',
  props<{ books: Book[] }>()
);

export const BuyNowBook = createAction('BuyNowBook', props<{ book: Book }>());
