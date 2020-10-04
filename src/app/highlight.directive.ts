import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  elem: any;
  textDeco: any;

  constructor(el: ElementRef ) { 
    el.nativeElement.style.background = "orange";
  }
  
  @HostListener("click") onClicks(){
    this.textDeco("line-through")
  }

}
