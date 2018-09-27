import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';

import{CoreModule} from './core/core.module';

import { AppRoutingModule } from './app.routing.module';




@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,      
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
   // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
 }
