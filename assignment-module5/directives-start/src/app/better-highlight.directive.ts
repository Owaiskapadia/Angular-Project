import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private renderer:Renderer2, private elementref: ElementRef) { } 
  @Input() defaultColor: string
  @Input() highlightColor: string
  @HostBinding('style.backgroundColor') backgroundCol: string
  
  ngOnInit() {
    this.backgroundCol= this.defaultColor
    
  }
  @HostListener('click') mouseOver(eventData: Event){
    // this.renderer.setStyle(this.elementref.nativeElement, 'backgroundColor', 'blue', )
    if(this.elementref.nativeElement.classList.contains("open")){
      this.renderer.removeClass(this.elementref.nativeElement, 'open')
      this.renderer.addClass(this.elementref.nativeElement, 'close')
    }else{
      this.renderer.addClass(this.elementref.nativeElement, 'open')
    }
   
    this.backgroundCol= this.highlightColor
  }
  @HostListener('mouseleave') mouseGaya(eventData: Event){
    // this.renderer.setStyle(this.elementref.nativeElement, 'backgroundColor', 'transparent', )
    this.backgroundCol= this.defaultColor
  }
}
