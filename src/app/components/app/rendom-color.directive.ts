import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appRendomColor]'
})
export class RendomColorDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    const randomColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    renderer.setStyle(elementRef.nativeElement, 'background', randomColor);
  }

}
