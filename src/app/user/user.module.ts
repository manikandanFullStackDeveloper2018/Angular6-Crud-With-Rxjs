import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import{AdduserComponent} from './adduser/adduser.component';
import { UserRoutingModule } from './user-routing.module';
import { AlphanumericDirective } from '../shared/alphanumeric.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserListComponent } from './user-list/user-list.component';



@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    UserRoutingModule
  ],
  declarations: [AdduserComponent, AlphanumericDirective, UserHomeComponent, UserListComponent],
  exports:[UserRoutingModule],
  providers:[]
})
export class UserModule { }
