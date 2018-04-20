import { Pipe, PipeTransform } from '@angular/core';
import { Currency } from './currency.model';

@Pipe({ name: 'searchByCurrency' })
export class SearchByCurrencyPipe implements PipeTransform {
  transform(currencies: Currency[], searchText: string) {
    return currencies.filter(currency =&amp;gt; currency.name.indexOf(searchText) !== -1);
  }
}
