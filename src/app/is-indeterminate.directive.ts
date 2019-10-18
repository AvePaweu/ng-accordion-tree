import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[isIndeterminate]'
})
export class IsIndeterminateDirective {
  @Input() set isIndeterminate(value: boolean) {
    this.element.nativeElement.children[0].indeterminate = value;
  }

  constructor(private element: ElementRef) { }

}
