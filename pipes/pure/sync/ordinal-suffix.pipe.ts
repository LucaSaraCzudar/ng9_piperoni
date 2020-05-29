/**
 * Credit goes to Lewis Fairweather @ JavaScript in Plain English on Medium
 * Source: https://medium.com/javascript-in-plain-english/6-pure-angular-pipes-for-human-readable-ui-c76b4e6fafa1
 *
 * Adds the correct ordinal suffix to the end of the numbers.
 * Example: “You just hired your 32nd employee”
 */

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'ordinalSuffix'
})
export class OrdinalSuffixPipe implements PipeTransform {
  transform(i: number): any {
    const j = i % 10;
    const k = i % 100;
    if (j === 1 && k !== 11) {
      return i + 'st';
    }
    if (j === 2 && k !== 12) {
      return i + 'nd';
    }
    if (j === 3 && k !== 13) {
      return i + 'rd';
    }
    return i + 'th';
  }
}
