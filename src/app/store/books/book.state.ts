import { Book } from '../../models/Book.model';

export interface CartState {
  cart: Book[];
  myOrders: any;
  selectedBook: any;
  buyNowBook: Book;
  bookToSearch: any;
}

export const initialState: CartState = {
  cart: [],
  myOrders: [],
  selectedBook: {},
  buyNowBook: {
    author: '',
    country: '',
    imageLink: '',
    ISBN: 0,
    language: '',
    link: '',
    pages: 100,
    price: 12,
    title: '',
    year: 2000,
  },
  bookToSearch: {},
};
