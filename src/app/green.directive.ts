import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appGreen]'
})
export class GreenDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // this.elementRef.nativeElement.style.backgroundColor = 'green';
  }

  @HostListener('mouseenter')
  onEnter() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background', 'yellow');
  }
  @HostListener('mouseleave')
  onExit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background', 'white');
  }
}
