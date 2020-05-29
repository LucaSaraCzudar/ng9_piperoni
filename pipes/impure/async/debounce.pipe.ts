/**
 * Credit goes to Tyler Davis on Lucidchart
 * Source: https://www.lucidchart.com/techblog/2017/11/08/5-usage-ideas-for-angular-pipes
 *
 * The Debounce Pipe takes in a value, and then if the value has changed since the last time
 * the debounce completed (or it is null), it will wait either the time passed in
 * as the second value or 500 ms if a time wasn’t provided, and then apply the new value.
 */

import {ChangeDetectorRef, NgZone, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'debounce',
  pure: false
})
export class DebouncePipe implements PipeTransform {
  private currentValue: any = null;
  private transformValue: any = null;
  private timeoutHandle = -1;

  constructor(private changeDetector: ChangeDetectorRef,
              private zone: NgZone) {
  }

  transform(value: any, debounceTime?: number): any {
    if (this.currentValue == null) {
      this.currentValue = value;
      return value;
    }
    if (this.currentValue === value) {
      // there is no value that needs debouncing at this point
      clearTimeout(this.timeoutHandle);
      return value;
    }
    if (this.transformValue !== value) {
      // there is a new value that needs to be debounced
      this.transformValue = value;
      clearTimeout(this.timeoutHandle);
      this.timeoutHandle = setTimeout(() => {
        this.zone.run(() => {
          this.currentValue = this.transformValue;
          this.transformValue = null;
          this.changeDetector.markForCheck();
        });
      }, typeof debounceTime === 'number' ? debounceTime : 500);
    }
    return this.currentValue;
  }
}
