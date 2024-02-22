import { NgControl } from '@angular/forms';
import { Directive, Input, SkipSelf, Optional } from '@angular/core';

@Directive({
    selector: '[disableControl]',
    standalone: true,
})
export class DisableControlDirective {
  @Input() set disableControl(condition: boolean) {
    const action = condition ? 'disable' : 'enable';
    this.ngControl.control?.[action]();
  }

  constructor(@Optional() @SkipSelf() private ngControl: NgControl) {}
}
