import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.addClass(this.elRef.nativeElement, 'shadow');
  }

  @HostListener('mouseleave') mousegoes(eventData: Event) {
    this.renderer.removeClass(this.elRef.nativeElement, 'shadow');
  }

}
