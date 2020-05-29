/**
 * Credit goes to Lewis Fairweather @ JavaScript in Plain English on Medium
 * Source: https://medium.com/javascript-in-plain-english/6-pure-angular-pipes-for-human-readable-ui-c76b4e6fafa1
 *
 * This pipe returns the difference between the given date, plus formats the difference into a human-readable string.
 * Example usage: {{toDate | dateDiff:fromDate}}
 *
 * The difference between the default and strict mode is that the latter function
 * won’t use approximate language such as ‘about 5 months’.
 */

import { Pipe, PipeTransform } from '@angular/core';
import {formatDistance, formatDistanceStrict} from 'date-fns';

@Pipe({
  name: 'dateDiff'
})
export class DateDiffPipe implements PipeTransform {

  transform(to: Date, from: Date, seconds = true, strict = false): string {

    return strict ?
      formatDistanceStrict(from, to) :
      formatDistance(from, to, { includeSeconds: seconds });
  }

}
