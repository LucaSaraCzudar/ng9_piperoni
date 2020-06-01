/**
 * Credit goes to Tyler Davis on Lucidchart
 * Source: https://www.lucidchart.com/techblog/2017/11/08/5-usage-ideas-for-angular-pipes
 *
 * A flashy feature that is animating text as if it was being typed by a user.
 */

import {ChangeDetectorRef, NgZone, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'naturalTypeAnimation'
})
export class NaturalTypeAnimationPipe implements PipeTransform {

  private typed = '';
  private target = '';
  private currentIndex = -1;
  private timeoutHandle = -1;

  constructor(
    private changeDetector: ChangeDetectorRef,
    private zone: NgZone,
  ) {
  }

  transform(value: string, mintypingSpeed: number = 30): any {
    if (this.target !== value) {
      clearTimeout(this.timeoutHandle);
      this.typed = '';
      this.currentIndex = -1;
      this.target = value;
      this.typeNextCharacter(mintypingSpeed);
    }
    return this.typed;
  }

  private typeNextCharacter(mintypingSpeed: number) {
    this.currentIndex++;
    this.typed = this.target.substr(0, this.currentIndex);
    this.changeDetector.markForCheck();
    if (this.typed !== this.target) {
      const time = Math.round(Math.random() * 70) + mintypingSpeed;
      this.timeoutHandle = setTimeout(() => {
        this.zone.run(() => this.typeNextCharacter(mintypingSpeed));
      }, time);
    }
  }
}

