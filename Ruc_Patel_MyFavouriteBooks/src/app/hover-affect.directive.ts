import { Directive,  ElementRef, HostListener } from '@angular/core';
import { ContentCardComponent } from './content-card/content-card.component';

@Directive({
  selector: '[appHoverAffect]',
  standalone: true
})
export class HoverAffectDirective {

  constructor(private elm: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.addEffect();
    //this.addBoldEffect();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.removeEffect();
  }

  private addEffect() {
      this.elm.nativeElement.style.textDecoration = 'underline';
  }

  private removeEffect() {
      this.elm.nativeElement.style.textDecoration = '';
  }
}
