import { Directive,  ElementRef, HostListener, Renderer2 } from '@angular/core';
import { ContentCardComponent } from './content-card/content-card.component';

@Directive({
  selector: '[appHoverAffect]',
  standalone: true
})
export class HoverAffectDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.addEffect();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.removeEffect();
  }

  private addEffect() {
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
      this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'underline');
  }

  private removeEffect() {
      this.renderer.removeStyle(this.el.nativeElement, 'font-weight');
      this.renderer.removeStyle(this.el.nativeElement, 'text-decoration');
  }
}
