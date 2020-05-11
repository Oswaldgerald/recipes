import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toogleOpen() {
    this.isOpen = !this.isOpen;

  }

  constructor() {
  }

}
