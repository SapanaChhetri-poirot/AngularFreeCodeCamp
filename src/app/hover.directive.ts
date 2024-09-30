import { DOCUMENT } from '@angular/common';
import { Component, Directive, ElementRef, Host, HostListener, Inject, Input, input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true
})
export class HoverDirective implements OnInit{

  @Input() color: string = 'red';

  constructor(private element: ElementRef, private renderer: Renderer2) {
    console.log(this.element.nativeElement);
   }

  ngOnInit(): void {
    //this.element.nativeElement.style.backgroundColor = this.color;
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      this.color
    );

    // HostListener

    // @HostListener('mouseenter') onMouseEnter() {
    //   this.renderer.setStyle(
    //     this.element.nativeElement,
    //     'backgroundColor',
    //     'green'
    //   );
    // }

  }
}
