import { Directive,HostListener } from '@angular/core';

@Directive({
  selector: '[appAlphanumeric]'
})
export class AlphanumericDirective {

private regExp = new RegExp('^[a-zA-Z0-9]+$');

@HostListener('keypress',['$event']) onlyAlphaNumeric(e:KeyboardEvent) {

     let userInp = String.fromCharCode(e.keyCode);
     return this.regExp.test(userInp);
  }

}
