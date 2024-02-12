import { Directive,  ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]',
  standalone: true
})
export class HoverAffectDirective {
  @Input() hoverStyle: string = '';

  constructor(private elm: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.addEffect();
    //this.addBoldEffect();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.removeEffect();
  }

  private addEffect() {
    this.elm.nativeElement.style[this.hoverStyle] = this.hoverStyle === 'textDecoration' ? 'underline' : 'bold';
  }

  private removeEffect() {
    this.elm.nativeElement.style[this.hoverStyle] = this.hoverStyle === 'textDecoration' ? 'none' : 'normal';
  }
}
