import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTwoDigitDecimaNumber]',
})
export class TwoDigitDecimaNumberDirective {
  // Allow decimal numbers and negative values -- ^[1-9]\d{0,2}(\.\d{3})*(,\d+)?$
  // ^[1-9]\d*(\.\d+)?$ --- ^(?!0\d|$)\d*(\.\d{1,4})?$ --- ^[1-9][\.\d]*(,\d+)?$
  private regex: RegExp = new RegExp(/^[0-9,]*(?:\.[0-9]{0,2})?$/);
  // Allow key codes for special events. Reflect :
  // Backspace, tab, end, home
  private specialKeys: Array<string> = [
    'Backspace',
    'Tab',
    'End',
    'Home',
    '-',
    'ArrowLeft',
    'ArrowRight',
    'Del',
    'Delete',
    ',',
  ];

  constructor(private el: ElementRef) {}
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    console.log(this.el.nativeElement.value);

    // Allow Backspace, tab, end, and home keys
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    let current: string = this.el.nativeElement.value;
    const position = this.el.nativeElement.selectionStart;
    const next: string = [
      current.slice(0, position),
      event.key == 'Decimal' ? '.' : event.key,
      current.slice(position),
    ].join('');
    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }
}
