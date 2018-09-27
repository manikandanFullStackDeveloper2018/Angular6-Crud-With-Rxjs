import { Component, OnInit,OnDestroy} from '@angular/core';
import{UserRegistrationService} from '../service/user-registration.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { EnableActionService } from '../service/enable-action.service';
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit,OnDestroy {
  private UserList;
  private EditEnabled;
  private UserListSubcribtion : Subscription;
  private EditEnabledSubcribtion : Subscription;

  constructor(private userCrudService:UserRegistrationService,
    private EnableActionService:EnableActionService,
    private route: ActivatedRoute,
    private router: Router) { }
    private faEdit = faEdit;
    private faTrashAlt = faTrashAlt;
  ngOnInit() {
    this.UserList = this.userCrudService.getUsers();
    //console.log(this.UserList);
    this.EditEnabledSubcribtion = this.EnableActionService.enableActionEmit.subscribe((enable)=>{this.EditEnabled=enable;});
    this.UserListSubcribtion = this.userCrudService.userChanged.subscribe((users)=>{this.UserList=users;});
    //console.log(this.UserList);
  }
  ngOnDestroy(){
    this.UserListSubcribtion.unsubscribe();
    this.EditEnabledSubcribtion.unsubscribe();
  }
  OnUserDetailsDelete(i:number){
    let confirmDelete = confirm("Do u want to delete the user");
    if(confirmDelete){
      this.userCrudService.removeUser(i);
      this.router.navigate(['/user/add'],{relativeTo: this.route}); 
    }
    
 }


}
