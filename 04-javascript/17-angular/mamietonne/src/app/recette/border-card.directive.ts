import { Directive, ElementRef, HostListener, Input } from '@angular/core';
type Shadow = [number, number, number, number];

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {
  private initColor: string = "black";
  private defaultColor: string = "green";
  private initShadow: Shadow = [5,5,10,2];
  private defaultShadow: Shadow = [5,5,20,2];
  private sizeBorder: number = 2;

  // @Input() appBorderCard: string|undefined;
  @Input("appBorderCard") borderColor: string|undefined;

  constructor(private el: ElementRef) 
  { 
    this.setShadow(...this.initShadow, this.initColor);
    this.setBorder(this.sizeBorder, this.initColor);
  }

  setShadow(x: number, y:number, blur: number, radius: number, color: string)
  {
    this.el.nativeElement.style.boxShadow = `${x}px ${y}px ${blur}px ${radius}px ${color}`;
  }
  setBorder(size: number, color: string)
  {
    this.el.nativeElement.style.border = `${size}px solid ${color}`;
  }

  @HostListener("mouseenter") onMouseEnter()
  {
    this.setBorder(this.sizeBorder, this.borderColor || this.defaultColor);
    this.setShadow(...this.defaultShadow, this.borderColor || this.defaultColor);
  }
  @HostListener("mouseleave") onMouseLeave()
  {
    this.setShadow(...this.initShadow, this.initColor);
    this.setBorder(this.sizeBorder, this.initColor);
  }
}
