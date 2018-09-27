import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

 userChanged = new Subject<User[]>();
 private users: User[] = [new User('staticOne','a@aol.in','Male','General')];
 constructor() { }
 addNewUser(newUser : User){
 	this.users.push(newUser);
 	this.userChanged.next(this.users.slice()); 	
 }
getUsers() {
    return this.users.slice();
}
getSingleUser(id:number){
  return this.users[id];
}
removeUser(id:number){
  this.users.splice(id,1);
  this.userChanged.next(this.users.slice());
}

updateUserDetails(id:number,updatedUser:User){
  this.users.splice(id,1,updatedUser);
  this.userChanged.next(this.users.slice());
}
}
