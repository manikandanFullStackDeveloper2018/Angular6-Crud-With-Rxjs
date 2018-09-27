import { Component, OnInit,OnDestroy, Output} from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import{UserRegistrationService} from '../service/user-registration.service';
import { faUser as regularUser,faEnvelope,faEdit,faTrashAlt} from '@fortawesome/free-regular-svg-icons';
import { EnableActionService } from '../service/enable-action.service';
import { addUserLabel } from '../../lang/en/add-user-lang';
import { commonValidationLabels } from '../../lang/en/common-validation-lang';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit,OnDestroy{
  [x: string]: any;
  private regularUser  = regularUser ;
  private faEnvelope = faEnvelope;

  private addUser : FormGroup;
  private addUserLabel = addUserLabel ;
  private commonValidationLabels = commonValidationLabels ;
  private categoryArr = ['General','BC','SC','ST'];
  private genderObj = {'male':'Male','female':'Female'};
  private message : String;
  //@Output() enableAction = new EventEmitter();
  private EditEnabled:boolean=false;
  private userId ;

  private UserIdSubcribtion :Subscription;
  constructor(private userCrudService:UserRegistrationService,
              private EnableActionService:EnableActionService,
              private route: ActivatedRoute,
              private router: Router) { }
  
ngOnInit() {
  	this.addUser = new FormGroup({
  				'name':new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z0-9]+'),Validators.minLength(5),Validators.maxLength(20)]),
  				'email':new FormControl(null,[Validators.required,Validators.email]),
  				'gender':new FormControl(null,[Validators.required]),
  				'category':new FormControl('',[Validators.required])
  		});

  this.UserIdSubcribtion = this.route.queryParams
                                      .subscribe(
                                        (params) => {
                                                if(this.route.snapshot.data['id']==''){
                                                  this.EditEnabled = true;
                                                  this.EnableActionService.actionUpdate(this.EditEnabled);
                                                  this.addUser.disable();
                                                }

                                                if(params['id']!='' && +params['id']>=0){
                                                  this.userId = +params['id'];
                                                  this.EditEnabled = true;
                                                  this.OnUserDetailsEdit(+params['id']);                          
                                                }
                                        }
                                      );  

}
OnUserDetailsEdit(i:number){
//console.log("OnUserDetailsEdit");  
  this.message = '';
  this.addUser.reset();
  this.addUser.enable();
  let newUser = this.userCrudService.getSingleUser(i);
  //console.log(newUser);
  if(newUser){
   this.addUser.setValue(newUser);
  }
  else{
    this.addUser.disable();
      this.message ='User is not found';
  }
}
onSubmitNewUser(){

    if(this.EditEnabled){
      this.message ='Updated Successfully';
      //console.log(this.addUser.value);
      this.userCrudService.updateUserDetails(this.userId,this.addUser.value);
      this.addUser.reset(); 
      this.router.navigate(['../edit'],{relativeTo: this.route}); 
    }else{
    //console.log(this.addUser.value);
     this.userCrudService.addNewUser(this.addUser.value);
     this.message ='Added Successfully';  
      this.addUser.reset(); 
    }
    
}

canDeactivate(){
   if(this.addUser.dirty){
      let pageRedirect = confirm("Do u want to leave this page with unsaved data");
      return pageRedirect;  
   }
   return true;
}
ngOnDestroy(){
    this.UserIdSubcribtion.unsubscribe();
    this.EnableActionService.actionUpdate(false);
}
  

}
