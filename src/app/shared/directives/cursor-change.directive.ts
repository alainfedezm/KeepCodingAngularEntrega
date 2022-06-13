import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[cmCursorChange]'
})
export class CursorChangeDirective {
  cmCursorChange:string= 'pointer'
  constructor(private el:ElementRef) {
    this.el.nativeElement.style.cursor = this.cmCursorChange;
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.el.nativeElement.style.cursor = this.cmCursorChange;
  }

}
