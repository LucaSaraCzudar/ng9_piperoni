import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform<T>(data: Array<T>, reverse: boolean = false, sortBy?: string): Array<T> {
    if (!sortBy) {
      return reverse ? data.reverse() : data.sort();
    }
    if (reverse) {
      return data.sort((a, b) => b[sortBy] - a[sortBy]);
    }
    return data.sort((a, b) => a[sortBy] - b[sortBy]);
  }
}
