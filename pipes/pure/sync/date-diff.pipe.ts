/**
 * Credit goes to Lewis Fairweather @ JavaScript in Plain English on Medium
 * Source: https://medium.com/javascript-in-plain-english/6-pure-angular-pipes-for-human-readable-ui-c76b4e6fafa1
 *
 * This pipe returns the difference between the given date, plus formats the difference into a human-readable string.
 * Example usage: {{toDate | dateDiff:fromDate}}
 */

import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance } from 'date-fns';

@Pipe({
  name: 'dateDiff'
})
export class DateDiffPipe implements PipeTransform {

  transform(to: Date, from: Date, seconds = true): string {

    return formatDistance(to, from, { includeSeconds: seconds });
  }

}
