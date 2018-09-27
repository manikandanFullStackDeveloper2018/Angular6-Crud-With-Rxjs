import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

const appRoutes: Routes = [
{path: '',component: HomeComponent},
{path: 'user', loadChildren:'./user/user.module#UserModule',data: { preload: true }},
{path:'**',redirectTo:'/pagenotfound'},
{path:'pagenotfound',component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,{preloadingStrategy: SelectivePreloadingStrategy})
  ],
  exports: [RouterModule],
  providers: [
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule {

}