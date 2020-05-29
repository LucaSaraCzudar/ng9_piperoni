/**
 * Credit goes to Lewis Fairweather @ JavaScript in Plain English on Medium
 * Source: https://medium.com/javascript-in-plain-english/6-pure-angular-pipes-for-human-readable-ui-c76b4e6fafa1
 *
 * This pipe takes a date and returns the difference between today and the given date in a human-readable form.
 * It takes an options argument, where we can specify whether you want to include seconds in the returned value.
 */

import { Pipe, PipeTransform } from '@angular/core';
import { formatDistanceToNow } from 'date-fns';

@Pipe({
  name: 'timeUntil',
  pure: true
})
export class TimeUntilPipe implements PipeTransform {
  constructor() {}

  transform(d: any, seconds = true): string {
    return formatDistanceToNow(d, { includeSeconds: seconds });
  }
}
