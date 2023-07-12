import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightOnMove]',
})
export class HighlightOnMoveDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    console.log(this.elRef);
    // not good practice
    // this.elRef.nativeElement.style.backgroundColor = 'yellow';

    // better
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');

    this.renderer.listen(
      this.elRef.nativeElement,
      'mouseenter',
      this.mouseenterHandler
    );

    this.renderer.listen(
      this.elRef.nativeElement,
      'mouseleave',
      this.mouseleaveHandler
    );
  }

  mouseenterHandler(e: MouseEvent): void {
    console.log('enter', e);
  }
  mouseleaveHandler(e: MouseEvent): void {
    console.log('leave', e);
  }
}
