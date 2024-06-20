import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @HostListener('error') handleError(): void {
    const theNative = this.theHost.nativeElement
    this.theHost
    theNative.src = '../../assets/images/error-img.png'
  }

  constructor(private theHost: ElementRef) { }

}
