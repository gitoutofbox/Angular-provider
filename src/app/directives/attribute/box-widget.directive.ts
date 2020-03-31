import { Directive, ElementRef, AfterViewInit, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appBoxWidget]'
})
export class BoxWidgetDirective implements AfterViewInit {
  private header;
  private body;
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.header  = this.el.nativeElement.querySelector('.header');
    this. body    = this.el.nativeElement.querySelector('.body');

    this.el.nativeElement.style.float   = 'left';
    this.header.style.padding           = "5px";  
    this.header.style.borderBottom      = '1px solid #ccc';
    
    this.body.style.height             = "60px"; 
    this.body.style.padding            = "10px 5px";
    this.el.nativeElement.style.border = '1px solid #ccc';
    this.addStyleColors();
  }

  addStyleColors() {
    this.body.style.backgroundColor    = '#ddd';
    this.header.style.backgroundColor  = 'yellow';
  }
  
  @HostListener('mouseenter') 
  hover() {
    this.header.style.backgroundColor  = '#eee';
    this.body.style.backgroundColor    = '#fff';
  }

  @HostListener('mouseleave') 
  leave() {
    this.addStyleColors();
  }

}
