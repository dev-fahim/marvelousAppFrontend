import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverRow]'
})
export class HoverRowDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.addClass(this.elRef.nativeElement, 'hovered-row');
  }

  @HostListener('mouseleave') mousegoes(eventData: Event) {
    this.renderer.removeClass(this.elRef.nativeElement, 'hovered-row');
  }

}
