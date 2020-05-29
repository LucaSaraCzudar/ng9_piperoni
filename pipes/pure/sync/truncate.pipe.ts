/**
 * Credit goes to Lewis Fairweather @ JavaScript in Plain English on Medium
 * Source: https://medium.com/javascript-in-plain-english/6-pure-angular-pipes-for-human-readable-ui-c76b4e6fafa1
 *
 * When receiving a string that is longer than the maximum length, it appends the given string
 * or ... by default to the end. If not, then it returns the string unmodified.
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, max: number, append = '...'): string {
    return value && value.length > max ? `${value.slice(0, max)}${append}` : value;
  }

}
