import { Directive, HostListener, ElementRef, Renderer2, Output, Input } from '@angular/core';

@Directive({
  selector: '[appCheckTask]'
})
export class CheckTaskDirective {

  appCheckTask = true;

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('click', ['$event'])
  onclick(event: Event): void{
    const el: HTMLElement = this.element.nativeElement.parentNode.querySelector('div.completed');

    if (this.appCheckTask === true) {
      this.renderer.setStyle(el, 'display', 'none');
    }
    else {
      this.renderer.setStyle(el, 'display', '');
    }
    this.appCheckTask = !this.appCheckTask;
  }
}

