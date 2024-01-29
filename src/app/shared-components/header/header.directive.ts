import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHeader]'
})
export class HeaderDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onClick() {
    const dropdownMenu = document.querySelector('.dropdown_menu');
    if (dropdownMenu) {
      dropdownMenu.classList.toggle('open');

      const isOpen = dropdownMenu.classList.contains('open');
      const toggleBtnIcon = document.querySelector('.toggle_btn i');
      isOpen ? toggleBtnIcon!.classList.replace('fa-bars', 'fa-xmark') : toggleBtnIcon!.classList.replace('fa-xmark', 'fa-bars');

    }
  }

}
