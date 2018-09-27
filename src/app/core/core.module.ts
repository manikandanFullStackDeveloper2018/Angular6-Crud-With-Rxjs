import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app.routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotFoundComponent } from './not-found/not-found.component';
@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  declarations: [HeaderComponent, HomeComponent,NotFoundComponent],
  exports:[AppRoutingModule,HeaderComponent]
})
export class CoreModule { }
