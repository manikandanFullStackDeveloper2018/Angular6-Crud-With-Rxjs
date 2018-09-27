import {  CanDeactivate,ActivatedRouteSnapshot, RouterStateSnapshot ,Router} from '@angular/router';
import{AdduserComponent} from '../adduser/adduser.component';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DeactivateRouteService implements CanDeactivate<AdduserComponent>{

  constructor(private router:Router) { }
  canDeactivate(component:AdduserComponent,route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    return (component.canDeactivate)? component.canDeactivate(): true;
  }
}
