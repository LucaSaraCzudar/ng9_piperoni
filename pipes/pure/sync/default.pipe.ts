/**
 * Credit goes to Tyler Davis on Lucidchart
 * Source: https://www.lucidchart.com/techblog/2017/11/08/5-usage-ideas-for-angular-pipes
 *
 * If the value is falsy, use the default value instead.
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'default'
})
export class DefaultPipe implements PipeTransform {
  transform(value: any, defaultValue: any): any {
    return value || defaultValue;
  }
}
