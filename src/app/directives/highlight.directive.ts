import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnInit {
  @Input() appHighlight: number = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (this.appHighlight >= 4.5) {
      this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid #ffd700');
      this.renderer.setStyle(this.el.nativeElement, 'background-color', '#fffdf0');
    }
  }
}