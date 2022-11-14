import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookTitle'
})
export class BookTitlePipe implements PipeTransform {

  transform(bookTitle: string): string {

    if (bookTitle.length < 20)
      return bookTitle;
    else {
      bookTitle = bookTitle.slice(0, 20);
      bookTitle += '...';
      return bookTitle;
    }
  }

}
