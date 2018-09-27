import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ AdduserComponent } from './adduser/adduser.component';
import{DeactivateRouteService} from './service/deactivate-route.service';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
{path: '', component: UserHomeComponent,children: [
      {path:'add',component:AdduserComponent,canDeactivate:[DeactivateRouteService]},
      {path:'edit',component:AdduserComponent,canDeactivate:[DeactivateRouteService],data:{id:''}}
    ]}
];
@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
