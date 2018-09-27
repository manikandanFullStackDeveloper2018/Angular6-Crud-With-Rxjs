import { Component, OnInit,OnDestroy} from '@angular/core';
import{UserRegistrationService} from '../service/user-registration.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { EnableActionService } from '../service/enable-action.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit{
  // private UserList;
  // private EditEnabled;
  // private UserListSubcribtion : Subscription;
  // private EditEnabledSubcribtion : Subscription;
  
  // constructor(private userCrudService:UserRegistrationService,
  //   private EnableActionService:EnableActionService,
  //   private route: ActivatedRoute,
  //   private router: Router) { }
  constructor(){}
  ngOnInit() {
    // this.UserList = this.userCrudService.getUsers();
    // //this.EditEnabledSubcribtion = this.EnableActionService.enableActionEmit.subscribe((enable)=>{this.EditEnabled=enable;console.log(enable);});
    // this.UserListSubcribtion = this.userCrudService.userChanged.subscribe((users)=>{this.UserList=users;});
  }
  // ngOnDestroy(){
  //   this.UserListSubcribtion.unsubscribe();
  //   this.EditEnabledSubcribtion.unsubscribe();
  // }
  
}
